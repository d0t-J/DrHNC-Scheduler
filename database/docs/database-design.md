# Database Design

## Project
Booking and Appointment Schema for Dr.HNC

---

# Purpose

The database is the central source of truth for the appointment automation platform.

All channels and services write to and read from PostgreSQL.

The database stores:

* Patients
* Conversations
* Messages
* Appointments
* Payments
* Reminders
* System Settings
* Audit Logs

The database does not contain:

* Medical records
* Diagnoses
* Treatment information
* Card information

The system is an appointment automation platform, not an Electronic Medical Record (EMR) system.

---

# High-Level Architecture

```text
Patient
    ↓
Messenger / WhatsApp
    ↓
Webhook
    ↓
n8n
    ↓
PostgreSQL

patients
conversations
messages
appointments
payments
reminders
settings
audit_logs

    ↓
Supervisor Dashboard
```

Every workflow, automation, and dashboard action ultimately interacts with PostgreSQL.

---

# Database Standards

## Primary Keys

All major entities use UUIDs.

Reason:

* Globally unique
* Safe for future migrations
* Difficult to enumerate
* Suitable for distributed systems

Implementation:

```sql
UUID PRIMARY KEY DEFAULT gen_random_uuid()
```

---

## Timestamps

All business tables include timestamps.

Implementation:

```sql
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

Reason:

* Auditability
* Reporting
* Workflow troubleshooting
* Future analytics

---

## Timezone Strategy

Use:

```sql
TIMESTAMPTZ
```

for all timestamps.

Never use plain TIMESTAMP.

All timestamps should be stored in UTC.

---

# Enumerations

The system uses PostgreSQL ENUM types to enforce valid states.

## Channel Type

```text
whatsapp
messenger
```

---

## Conversation Status

```text
OPEN
WAITING_FOR_PATIENT
ESCALATED
CLOSED
```

---

## Priority Level

```text
LOW
MEDIUM
HIGH
URGENT
```

---

## Appointment Status

```text
NEW
WAITING_FOR_DETAILS
SLOT_PROPOSED
RESERVED
PAYMENT_PENDING
PAYMENT_VERIFICATION_PENDING
CONFIRMED
RESCHEDULED
CANCELLED
NO_SHOW
CLOSED
```

These states represent the official booking state machine.

---

## Payment Status

```text
PENDING
PAID
FAILED
REFUNDED
```

---

## Reminder Status

```text
PENDING
SENT
FAILED
```

---

# Entity Relationship Overview

```text
patients
    │
    ├── conversations
    │        │
    │        └── messages
    │
    └── appointments
             │
             ├── payments
             │
             └── reminders

settings

audit_logs
```

---

# Table Design

## patients

Purpose:

Stores unique patient identities.

A patient may originate from:

* WhatsApp
* Facebook Messenger

### Columns

| Column         | Type         | Description          |
| -------------- | ------------ | -------------------- |
| id             | UUID         | Primary Key          |
| channel        | channel_type | Source channel       |
| phone_number   | VARCHAR(20)  | WhatsApp identifier  |
| messenger_psid | TEXT         | Messenger identifier |
| full_name      | TEXT         | Patient name         |
| created_at     | TIMESTAMPTZ  | Record creation      |
| updated_at     | TIMESTAMPTZ  | Last update          |

### Business Rules

At least one of:

* phone_number
* messenger_psid

must exist.

Patient identity is determined by:

* WhatsApp → phone_number
* Messenger → messenger_psid

### Indexes

```sql
idx_patients_phone
idx_patients_psid
idx_patients_phone_unique
idx_patients_psid_unique
```

---

## conversations

Purpose:

Represents an active interaction with a patient.

A patient may have multiple conversations over time.

### Columns

| Column          | Type                |
| --------------- | ------------------- |
| id              | UUID                |
| patient_id      | UUID                |
| status          | conversation_status |
| priority        | priority_level      |
| current_intent  | TEXT                |
| assigned_to     | TEXT                |
| last_message_at | TIMESTAMPTZ         |
| created_at      | TIMESTAMPTZ         |
| updated_at      | TIMESTAMPTZ         |

### Supported Intents

```text
Booking
Reschedule
Cancel
FAQ
Payment Proof
Complaint
Urgent Issue
```

### Relationship

```text
patients
    ↓
conversations
```

---

## messages

Purpose:

Stores every inbound and outbound message.

### Columns

| Column              | Type         |
| ------------------- | ------------ |
| id                  | UUID         |
| conversation_id     | UUID         |
| direction           | TEXT         |
| channel             | channel_type |
| message_type        | TEXT         |
| platform_message_id | TEXT         |
| message_text        | TEXT         |
| created_at          | TIMESTAMPTZ  |

### Direction Values

```text
INBOUND
OUTBOUND
```

### Relationship

```text
conversations
    ↓
messages
```

### Notes

Meta may retry webhooks.

platform_message_id should remain unique whenever available.

---

## appointments

Purpose:

Stores appointment lifecycle data.

### Columns

| Column           | Type               |
| ---------------- | ------------------ |
| id               | UUID               |
| patient_id       | UUID               |
| appointment_date | DATE               |
| appointment_time | TIME               |
| status           | appointment_status |
| notes            | TEXT               |
| reserved_until   | TIMESTAMPTZ        |
| confirmed_at     | TIMESTAMPTZ        |
| created_at       | TIMESTAMPTZ        |
| updated_at       | TIMESTAMPTZ        |

### Relationship

```text
patients
    ↓
appointments
```

---

# Appointment State Machine

```text
NEW
↓
WAITING_FOR_DETAILS
↓
SLOT_PROPOSED
↓
RESERVED
↓
PAYMENT_PENDING
↓
PAYMENT_VERIFICATION_PENDING
↓
CONFIRMED
```

Alternative paths:

```text
CONFIRMED
    ↓
RESCHEDULED

CONFIRMED
    ↓
NO_SHOW

ANY ACTIVE STATE
    ↓
CANCELLED

FINAL STATES
    ↓
CLOSED
```

---

## payments

Purpose:

Tracks GoPayFast transactions.

### Columns

| Column              | Type           |
| ------------------- | -------------- |
| id                  | UUID           |
| appointment_id      | UUID           |
| amount              | NUMERIC(10,2)  |
| currency            | VARCHAR(10)    |
| status              | payment_status |
| gopayfast_reference | TEXT           |
| payment_link        | TEXT           |
| paid_at             | TIMESTAMPTZ    |
| created_at          | TIMESTAMPTZ    |
| updated_at          | TIMESTAMPTZ    |

### Relationship

```text
appointments
    ↓
payments
```

### Payment Flow

```text
Slot Reserved
↓
Payment Link Generated
↓
Patient Pays
↓
GoPayFast Callback
↓
Verification
↓
Booking Confirmed
```

### Security Rules

The system never:

* Stores card information
* Processes card information
* Handles card numbers

All payment processing occurs on GoPayFast infrastructure.

---

## reminders

Purpose:

Stores scheduled reminders.

### Columns

| Column         | Type            |
| -------------- | --------------- |
| id             | UUID            |
| appointment_id | UUID            |
| reminder_type  | TEXT            |
| scheduled_at   | TIMESTAMPTZ     |
| sent_at        | TIMESTAMPTZ     |
| status         | reminder_status |
| created_at     | TIMESTAMPTZ     |

### Reminder Types

```text
24_HOUR_REMINDER
2_HOUR_REMINDER
CONFIRMATION
RESCHEDULE_CONFIRMATION
CANCELLATION_CONFIRMATION
```

### Relationship

```text
appointments
    ↓
reminders
```

---

## settings

Purpose:

Stores operational configuration.

This table is a singleton.

Only one row should ever exist.

### Columns

| Column                  | Type        |
| ----------------------- | ----------- |
| id                      | INTEGER     |
| consultation_start_time | TIME        |
| consultation_end_time   | TIME        |
| slot_duration_minutes   | INTEGER     |
| daily_patient_limit     | INTEGER     |
| refund_policy           | TEXT        |
| cancellation_policy     | TEXT        |
| reschedule_policy       | TEXT        |
| created_at              | TIMESTAMPTZ |
| updated_at              | TIMESTAMPTZ |

### Default Values

```text
Consultation Start: 11:00 AM
Consultation End: 2:30 PM
Slot Duration: 20 Minutes
Daily Patient Limit: 12
```

### Purpose

Allows business rules to change without code changes.

---

## audit_logs

Purpose:

Provides a permanent audit trail.

### Columns

| Column       | Type        |
| ------------ | ----------- |
| id           | UUID        |
| entity_type  | TEXT        |
| entity_id    | UUID        |
| action       | TEXT        |
| performed_by | TEXT        |
| details      | JSONB       |
| created_at   | TIMESTAMPTZ |

### Example Actions

```text
Appointment Created
Appointment Confirmed
Payment Approved
Payment Rejected
Reminder Sent
Conversation Escalated
```

---

# Foreign Key Relationships

```text
patients.id
    ↓
conversations.patient_id

patients.id
    ↓
appointments.patient_id

conversations.id
    ↓
messages.conversation_id

appointments.id
    ↓
payments.appointment_id

appointments.id
    ↓
reminders.appointment_id
```

Foreign keys should use:

```sql
ON DELETE RESTRICT
```

to prevent accidental removal of business records.

---

# Database Scope

The database supports:

* Messenger
* WhatsApp
* Booking Automation
* Payment Automation
* Reminder Automation
* Supervisor Dashboard

The database does not support:

* Medical records
* Prescriptions
* Clinical documentation
* AI diagnosis

These are intentionally out of scope for MVP.

---

# Current Database Version

Version: 1.0

Schema File:

```text
database/schema/001_initial_schema.sql
```

Seed File:

```text
database/seeds/001_default_settings.sql
```

Status:

Ready for implementation.
