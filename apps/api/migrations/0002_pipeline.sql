-- Pipeline del CRM: etapa actual del lead e historial inmutable de cambios.
ALTER TABLE leads ADD COLUMN stage TEXT NOT NULL DEFAULT 'nuevo';
ALTER TABLE leads ADD COLUMN updated_at TEXT;
CREATE TABLE IF NOT EXISTS lead_events (
  id TEXT PRIMARY KEY,
  lead_id TEXT NOT NULL REFERENCES leads(id),
  type TEXT NOT NULL,            -- created | stage_changed | note
  from_stage TEXT,
  to_stage TEXT,
  actor TEXT NOT NULL,
  payload TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_lead_events_lead ON lead_events(lead_id, created_at);
CREATE INDEX IF NOT EXISTS idx_leads_stage ON leads(stage, created_at);
