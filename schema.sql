-- Membres de l'équipe
CREATE TABLE members (
  id         VARCHAR PRIMARY KEY,
  name       VARCHAR NOT NULL,
  role       VARCHAR NOT NULL,
  github     VARCHAR,
  avatar     VARCHAR,
  is_active  BOOLEAN DEFAULT true
);

-- Projets
CREATE TABLE projects (
  id          SERIAL PRIMARY KEY,
  slug        VARCHAR UNIQUE NOT NULL,
  name        VARCHAR NOT NULL,
  category    VARCHAR NOT NULL,
  type        VARCHAR NOT NULL,
  status      VARCHAR NOT NULL,
  year        VARCHAR NOT NULL,
  short_desc  TEXT NOT NULL,
  long_desc   TEXT,
  stack       TEXT[],
  accent      VARCHAR,
  gradient    VARCHAR,
  github_url  VARCHAR,
  demo_url    VARCHAR,
  doc_url     VARCHAR,
  published   BOOLEAN DEFAULT false,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Liaison projets <-> membres
CREATE TABLE project_members (
  project_id  INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  member_id   VARCHAR REFERENCES members(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, member_id)
);

-- Admins
CREATE TABLE admins (
  id          SERIAL PRIMARY KEY,
  email       VARCHAR UNIQUE NOT NULL,
  password    VARCHAR NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);