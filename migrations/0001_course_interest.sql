CREATE TABLE IF NOT EXISTS course_interest (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  submitter_role TEXT NOT NULL,
  age_group TEXT NOT NULL,
  country TEXT,
  experience_level TEXT NOT NULL,
  interests TEXT NOT NULL,
  preferred_format TEXT NOT NULL,
  message TEXT,
  consent_version TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS course_interest_created_at_idx ON course_interest(created_at);
CREATE INDEX IF NOT EXISTS course_interest_email_idx ON course_interest(email);
