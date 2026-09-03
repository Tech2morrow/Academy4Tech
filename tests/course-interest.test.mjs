import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from '../functions/api/course-interest.js';

class FakeStatement {
  constructor(database, sql) {
    this.database = database;
    this.sql = sql;
    this.values = [];
  }

  bind(...values) {
    this.values = values;
    return this;
  }

  async run() {
    if (this.database.failWrites) return { success: false, meta: { changes: 0 } };
    const [id, createdAt, name, email] = this.values;
    if (this.database.rows.has(id)) return { success: true, meta: { changes: 0 } };
    this.database.rows.set(id, { id, created_at: createdAt, name, email });
    return { success: true, meta: { changes: 1 } };
  }

  async first() {
    return this.database.rows.get(this.values[0]) ?? null;
  }
}

class FakeDatabase {
  constructor({ failWrites = false } = {}) {
    this.rows = new Map();
    this.failWrites = failWrites;
  }

  prepare(sql) {
    return new FakeStatement(this, sql);
  }
}

const submissionId = '7a9c97b0-f1ea-4ee5-8310-abcdf0123456';
const validPayload = (overrides = {}) => ({
  submissionId,
  startedAt: String(Date.now() - 5000),
  name: 'Test Learner',
  email: 'learner@example.com',
  submitterRole: 'learner',
  ageGroup: '19-24',
  country: 'United Arab Emirates',
  experienceLevel: 'beginner',
  interests: ['robotics', 'python'],
  preferredFormat: 'self-paced',
  message: 'I want to build a small rover.',
  guardianConsent: 'yes',
  dataUseConsent: 'yes',
  ...overrides
});

function requestFor(payload, origin = 'https://academy4tech.com') {
  return new Request('https://academy4tech.com/api/course-interest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: origin },
    body: JSON.stringify(payload)
  });
}

test('stores a valid record and returns its confirmation reference', async () => {
  const database = new FakeDatabase();
  const response = await onRequestPost({ request: requestFor(validPayload()), env: { STUDENT_INTEREST_DB: database } });
  const body = await response.json();

  assert.equal(response.status, 201);
  assert.equal(body.ok, true);
  assert.equal(body.submissionId, submissionId);
  assert.equal(database.rows.size, 1);
  assert.equal(database.rows.get(submissionId).email, 'learner@example.com');
});

test('replaying the same submission is idempotent and does not create a duplicate', async () => {
  const database = new FakeDatabase();
  const first = await onRequestPost({ request: requestFor(validPayload()), env: { STUDENT_INTEREST_DB: database } });
  const replay = await onRequestPost({ request: requestFor(validPayload()), env: { STUDENT_INTEREST_DB: database } });
  const body = await replay.json();

  assert.equal(first.status, 201);
  assert.equal(replay.status, 200);
  assert.equal(body.replayed, true);
  assert.equal(body.submissionId, submissionId);
  assert.equal(database.rows.size, 1);
});

test('does not claim success when the database binding is missing', async () => {
  const response = await onRequestPost({ request: requestFor(validPayload()), env: {} });
  const body = await response.json();

  assert.equal(response.status, 503);
  assert.match(body.error, /temporarily unavailable/i);
});

test('does not claim success when D1 does not confirm the write', async () => {
  const database = new FakeDatabase({ failWrites: true });
  const response = await onRequestPost({ request: requestFor(validPayload()), env: { STUDENT_INTEREST_DB: database } });
  const body = await response.json();

  assert.equal(response.status, 500);
  assert.equal(database.rows.size, 0);
  assert.match(body.error, /could not be saved/i);
});

test('accepts a valid submission when the learner device clock differs from the edge', async () => {
  const database = new FakeDatabase();
  const fourHours = 4 * 60 * 60 * 1000;
  const response = await onRequestPost({
    request: requestFor(validPayload({ startedAt: String(Date.now() - fourHours) })),
    env: { STUDENT_INTEREST_DB: database }
  });

  assert.equal(response.status, 201);
  assert.equal(database.rows.size, 1);
});

test('rejects cross-site requests and invalid under-16 submissions', async () => {
  const database = new FakeDatabase();
  const crossSite = await onRequestPost({ request: requestFor(validPayload(), 'https://example.com'), env: { STUDENT_INTEREST_DB: database } });
  const underAge = await onRequestPost({ request: requestFor(validPayload({ ageGroup: 'under-16' })), env: { STUDENT_INTEREST_DB: database } });

  assert.equal(crossSite.status, 403);
  assert.equal(underAge.status, 400);
  assert.equal(database.rows.size, 0);
});
