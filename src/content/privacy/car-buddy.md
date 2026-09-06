---
appName: Car Buddy
title: Car Buddy privacy policy
description: How Car Buddy handles local vehicle records, optional device services, exports, backups, advertising and user controls.
effectiveDate: 2026-09-06
identifier: Vehicle maintenance companion
icon: rover
order: 3
---
## Who we are

Car Buddy is provided by Academy4Tech. The primary privacy and support contact is [info@academy4tech.com](mailto:info@academy4tech.com). The alternative contact is [academy4tech@gmail.com](mailto:academy4tech@gmail.com). Website: [academy4tech.com](https://academy4tech.com).

## Local information

Car Buddy is offline-first and requires no account. It stores user-entered vehicle details, an optional user-selected vehicle-photo reference, odometer readings, editable schedules, completed maintenance events and items, optional dates, costs, workshop and technician details, notes, preferences, and references to user-selected receipts or attachments. This information powers the dashboard, status calculations, reminder centre, local notifications, offline assistant, reports, and backups. Selected files remain in the user's chosen document location; removing a reference does not delete the original file. The app does not request location, contacts, continuous microphone access, call logs, SMS, or broad storage access. VIN and registration fields are optional. Avoid entering unnecessary sensitive information.

## Optional voice-to-text

After the user taps the voice button, Car Buddy can open an installed Android speech-recognition activity. That separate provider may capture audio and process a transcript under its own privacy terms. Car Buddy receives only the returned text, does not request continuous microphone access, and does not keep an audio recording. Notes can always be typed instead.

## Engine Sound Check

The optional Engine Sound Check requests Android's microphone permission only after the user taps **Record engine sound**. It records a short six-second sample while the user is actively using the feature, analyses frequency and volume patterns in memory on the device, and does not save, upload, or share the raw audio in the supplied build. It provides a cautious educational screening, not a diagnosis. Users should record only their own vehicle in a safe place and avoid recording people or private conversations. The permission can be denied or revoked in Android Settings without affecting maintenance tracking.

## Notifications

If enabled and permitted by Android, WorkManager evaluates saved schedules locally. Notifications may show a vehicle name and maintenance-item names. Permission may be denied and reminders may be disabled without losing core tracking.

## Reports, backup, and restore

PDF/CSV reports and versioned JSON backups are created only after user action. Android's document picker or share sheet transfers them to the destination the user chooses, whose own policy then applies. Report preview controls included sections. The buyer-dossier preset hides full identifiers, costs, private notes, workshop and technician details, and receipt filenames by default; review every export before sharing. JSON backups are readable and can include private notes; save them only to a trusted location. Restores are validated, then the user chooses merge or replace.

## Android backup and Google Drive

Android may include private app files in Auto Backup or device transfer associated with the device owner's Google account. Manual Back up/Restore can also use Drive through Android's picker. If the user chooses **Connect Google Drive**, Car Buddy requests only `https://www.googleapis.com/auth/drive.appdata` and stores one versioned maintenance backup in a hidden app-specific Drive folder. It cannot browse normal Drive files. The payload can contain vehicles, odometer history, schedules, maintenance events, preferences, private notes, and attachment references; it excludes engine-sound recordings and receipt file contents. Google Play services handles authorization and short-lived access tokens. Tokens are not written to Room, backups, reports, logs, or analytics. Users can sync on demand, and Android may attempt a network-constrained background sync approximately daily. If phone and Drive both changed, the app requires a keep-phone, use-Drive, or merge choice. Cloud failure never deletes good local data. Disconnecting revokes the app permission and stops future sync while keeping local records and the existing hidden Drive backup. Deleting local data does not automatically delete that cloud backup.

## Car Buddy assistant

The supplied app provides general offline education. Questions leave the device only if the developer configures a secure HTTPS backend. An enabled service would receive the question and limited selected-vehicle context needed to answer it. Provider details: **[ADD AI AND RETRIEVAL PROVIDERS]**. Before release, disclose purposes, regions, retention, deletion controls, and model-training choices. No provider secret is stored in the Android app. Do not enter VINs, registration numbers, addresses, payment data, or other sensitive information in assistant questions. Guidance is not a diagnosis, manufacturer specification, recall check, or professional inspection.

## Advertising and consent

The current build uses Google Mobile Ads with Academy4Tech's configured native ad unit. Google User Messaging Platform refreshes consent information before an ad request and presents privacy choices where required. Ad delivery, measurement, and related device signals are handled by Google under its policies and the consent choices shown to the user. Provider: Google. Consent system: Google User Messaging Platform. See [Google's privacy policy](https://policies.google.com/privacy).

## Analytics and logs

The supplied build contains no analytics SDK. Production logs must not contain VINs, registrations, private notes, provider tokens, or assistant conversations. If analytics or crash reporting is added, this policy and Play disclosures must be updated first.

## Retention, deletion, and control

Local records remain until the user deletes records or vehicles, chooses **Delete all local data**, clears app storage, or uninstalls, subject to Android backup/restore. The all-data action requires typing **DELETE** and offers backup first. Archiving retains history while removing a vehicle from the active dashboard. Academy4Tech cannot remotely view or delete data stored only on the user's phone. Cloud files are managed separately. Contact [info@academy4tech.com](mailto:info@academy4tech.com) for privacy or deletion questions. If online accounts or server-stored records are introduced, the exact deletion and identity-verification process must be documented before release.

## Sharing, security, and children

Academy4Tech does not sell locally stored maintenance records. Data leaves the device only through user-selected export/share, enabled Android backup/transfer, a configured assistant request, or disclosed Google Mobile Ads behavior. Private app storage and HTTPS are used where applicable, but no system can be guaranteed completely secure. Car Buddy is a general-audience vehicle utility and is not directed to children. If children are included in the production target audience, the app and advertising must be reviewed against Google Play Families policy and applicable law.

## Regional rights and third parties

Depending on location, users may have rights of access, correction, deletion, restriction, objection, portability, or consent withdrawal for Academy4Tech-controlled online processing. Google Play, Android backup, document providers, installed Android speech-recognition providers, Google Mobile Ads, Google User Messaging Platform, browsers, email applications, and future assistant providers have their own policies.

## Changes

The effective date will change when this policy changes. Material changes should also be communicated in-app or through the store listing when appropriate.

## Start a conversation

For learning questions, collaborations, application support, privacy questions, data-deletion requests, and project enquiries, write to the Academy4Tech inbox.

**Email Academy4Tech:** [info@academy4tech.com](mailto:info@academy4tech.com)<br />
**Alternative email:** [academy4tech@gmail.com](mailto:academy4tech@gmail.com)
