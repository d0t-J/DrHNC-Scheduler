-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ==========================================
-- ENUMS
-- ==========================================

CREATE TYPE channel_type AS ENUM (
'whatsapp',
'messenger'
);

CREATE TYPE conversation_status AS ENUM (
'OPEN',
'WAITING_FOR_PATIENT',
'ESCALATED',
'CLOSED'
);

CREATE TYPE priority_level AS ENUM (
'LOW',
'MEDIUM',
'HIGH',
'URGENT'
);

CREATE TYPE intent_type AS ENUM (
'BOOKING',
'RESCHEDULE',
'CANCEL',
'FAQ',
'PAYMENT_PROOF',
'COMPLAINT',
'URGENT_ISSUE'
);

CREATE TYPE appointment_status AS ENUM (
'NEW',
'WAITING_FOR_DETAILS',
'SLOT_PROPOSED',
'RESERVED',
'PAYMENT_PENDING',
'PAYMENT_VERIFICATION_PENDING',
'CONFIRMED',
'RESCHEDULED',
'CANCELLED',
'NO_SHOW',
'CLOSED'
);

CREATE TYPE payment_status AS ENUM (
'PENDING',
'PAID',
'FAILED',
'REFUNDED'
);

CREATE TYPE reminder_status AS ENUM (
'PENDING',
'SENT',
'FAILED'
);

CREATE TYPE reminder_type_enum AS ENUM (
'24_HOUR',
'2_HOUR',
'CONFIRMATION',
'RESCHEDULE_CONFIRMATION',
'CANCELLATION_CONFIRMATION'
);

CREATE TYPE message_direction AS ENUM (
'INBOUND',
'OUTBOUND'
);

-- ==========================================
-- UPDATED_AT TRIGGER FUNCTION
-- ==========================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ==========================================
-- PATIENTS
-- ==========================================

CREATE TABLE patients (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


channel channel_type NOT NULL,

phone_number VARCHAR(20),
messenger_psid TEXT,

full_name TEXT,

created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

CONSTRAINT patients_identity_check
CHECK (
    (
        channel = 'whatsapp'
        AND phone_number IS NOT NULL
        AND messenger_psid IS NULL
    )
    OR
    (
        channel = 'messenger'
        AND messenger_psid IS NOT NULL
        AND phone_number IS NULL
    )
)


);

-- ==========================================
-- CONVERSATIONS
-- ==========================================

CREATE TABLE conversations (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


patient_id UUID NOT NULL
    REFERENCES patients(id)
    ON DELETE RESTRICT,

status conversation_status NOT NULL DEFAULT 'OPEN',

priority priority_level NOT NULL DEFAULT 'MEDIUM',

current_intent intent_type,

assigned_to TEXT,

last_message_at TIMESTAMPTZ,

created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()


);

-- ==========================================
-- MESSAGES
-- ==========================================

CREATE TABLE messages (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


conversation_id UUID NOT NULL
    REFERENCES conversations(id)
    ON DELETE CASCADE,

direction message_direction NOT NULL,

channel channel_type NOT NULL,

message_type TEXT NOT NULL,

platform_message_id TEXT,

message_text TEXT,

created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()


);

-- ==========================================
-- APPOINTMENTS
-- ==========================================

CREATE TABLE appointments (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


patient_id UUID NOT NULL
    REFERENCES patients(id)
    ON DELETE RESTRICT,

appointment_date DATE NOT NULL,

appointment_time TIME NOT NULL,

status appointment_status NOT NULL DEFAULT 'NEW',

notes TEXT,

reserved_until TIMESTAMPTZ,

confirmed_at TIMESTAMPTZ,

created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()


);

-- ==========================================
-- PAYMENTS
-- ==========================================

CREATE TABLE payments (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


appointment_id UUID NOT NULL
    REFERENCES appointments(id)
    ON DELETE CASCADE,

amount NUMERIC(10,2) NOT NULL,

currency VARCHAR(10) NOT NULL DEFAULT 'PKR',

status payment_status NOT NULL DEFAULT 'PENDING',

gopayfast_reference TEXT,

payment_link TEXT,

paid_at TIMESTAMPTZ,

created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

CONSTRAINT payments_amount_positive
CHECK (amount > 0)


);

-- ==========================================
-- REMINDERS
-- ==========================================

CREATE TABLE reminders (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


appointment_id UUID NOT NULL
    REFERENCES appointments(id)
    ON DELETE CASCADE,

reminder_type reminder_type_enum NOT NULL,

scheduled_at TIMESTAMPTZ NOT NULL,

sent_at TIMESTAMPTZ,

status reminder_status NOT NULL DEFAULT 'PENDING',

created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()


);

-- ==========================================
-- SETTINGS
-- ==========================================

CREATE TABLE settings (
id INTEGER PRIMARY KEY,


consultation_start_time TIME NOT NULL,
consultation_end_time TIME NOT NULL,

slot_duration_minutes INTEGER NOT NULL,

daily_patient_limit INTEGER NOT NULL,

refund_policy TEXT,
cancellation_policy TEXT,
reschedule_policy TEXT,

created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

CONSTRAINT settings_singleton
    CHECK (id = 1),

CONSTRAINT settings_positive_slot_duration
    CHECK (slot_duration_minutes > 0),

CONSTRAINT settings_positive_daily_limit
    CHECK (daily_patient_limit > 0)


);

-- ==========================================
-- AUDIT LOGS
-- ==========================================

CREATE TABLE audit_logs (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


entity_type TEXT NOT NULL,

entity_id UUID NOT NULL,

action TEXT NOT NULL,

performed_by TEXT,

details JSONB,

created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()


);

-- ==========================================
-- INDEXES
-- ==========================================

CREATE INDEX idx_patients_phone
ON patients(phone_number);

CREATE INDEX idx_patients_psid
ON patients(messenger_psid);

CREATE UNIQUE INDEX idx_patients_phone_unique
ON patients(phone_number)
WHERE phone_number IS NOT NULL;

CREATE UNIQUE INDEX idx_patients_psid_unique
ON patients(messenger_psid)
WHERE messenger_psid IS NOT NULL;

CREATE INDEX idx_conversations_patient
ON conversations(patient_id);

CREATE INDEX idx_messages_conversation
ON messages(conversation_id);

CREATE UNIQUE INDEX idx_messages_platform_message
ON messages(platform_message_id)
WHERE platform_message_id IS NOT NULL;

CREATE INDEX idx_appointments_patient
ON appointments(patient_id);

CREATE INDEX idx_appointments_status
ON appointments(status);

CREATE UNIQUE INDEX idx_appointment_slot
ON appointments (
appointment_date,
appointment_time
)
WHERE status NOT IN (
'CANCELLED',
'CLOSED'
);

CREATE INDEX idx_payments_appointment
ON payments(appointment_id);

CREATE INDEX idx_reminders_appointment
ON reminders(appointment_id);

-- ==========================================
-- UPDATED_AT TRIGGERS
-- ==========================================

CREATE TRIGGER trg_patients_updated_at
BEFORE UPDATE ON patients
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_conversations_updated_at
BEFORE UPDATE ON conversations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_appointments_updated_at
BEFORE UPDATE ON appointments
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_payments_updated_at
BEFORE UPDATE ON payments
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_settings_updated_at
BEFORE UPDATE ON settings
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();