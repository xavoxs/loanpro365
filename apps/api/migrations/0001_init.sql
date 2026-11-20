CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  locale TEXT NOT NULL CHECK (locale IN ('en','es')),
  source_tool TEXT,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  consent_tcpa INTEGER NOT NULL,
  consent_text_version TEXT NOT NULL,
  payload_json TEXT,
  status TEXT NOT NULL DEFAULT 'new'
);
