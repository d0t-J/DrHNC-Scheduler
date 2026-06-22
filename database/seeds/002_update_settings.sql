-- Update settings to confirmed business rules (22-June-2026)
-- Run after 001_default_settings.sql if already seeded, or replace values at first seed.
UPDATE settings
SET
    consultation_start_time  = '12:00',
    consultation_end_time    = '14:30',
    slot_duration_minutes    = 10,
    daily_patient_limit      = 15,
    refund_policy            = 'All payments are non-refundable. Once an appointment is confirmed and payment received, no refund will be issued under any circumstances initiated by the patient.',
    cancellation_policy      = 'Patient-initiated cancellations: not permitted. Confirmed appointments are final. Clinic-initiated cancellations (cancelled by Dr. Hasan Nasir): full refund of the advance payment will be issued to the patient.',
    reschedule_policy        = 'Rescheduling by the patient is not permitted once an appointment is confirmed. No exceptions.',
    updated_at               = NOW()
WHERE id = 1;
