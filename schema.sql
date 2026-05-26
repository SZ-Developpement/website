-- Drop dans le bon ordre (contraintes FK d'abord)
DROP TABLE IF EXISTS project_members CASCADE;
DROP TABLE IF EXISTS project_stack CASCADE;
DROP TABLE IF EXISTS member_stack CASCADE;
DROP TABLE IF EXISTS stack_items CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS members CASCADE;
DROP TABLE IF EXISTS admins CASCADE;

-- Admins (toute l'équipe se connecte ici)
CREATE TABLE admins (
  id         SERIAL PRIMARY KEY,
  email      VARCHAR UNIQUE NOT NULL,
  password   VARCHAR NOT NULL,
  member_id  VARCHAR,                     -- lien vers le profil membre
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Membres (profil public visible sur la vitrine)
CREATE TABLE members (
  id           VARCHAR PRIMARY KEY,
  name         VARCHAR NOT NULL,
  alias        VARCHAR,
  role         VARCHAR NOT NULL,
  specialties  TEXT[],
  formation    VARCHAR,
  localisation VARCHAR,
  age          INTEGER,
  bio          TEXT,
  github       VARCHAR,
  linkedin     VARCHAR,
  portfolio    VARCHAR,
  avatar       VARCHAR,
  is_active    BOOLEAN DEFAULT true,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Stack centralisée
CREATE TABLE stack_items (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR UNIQUE NOT NULL,
  category VARCHAR NOT NULL,
  icon     VARCHAR
);

-- Liaison membre <-> stack
CREATE TABLE member_stack (
  member_id     VARCHAR REFERENCES members(id) ON DELETE CASCADE,
  stack_item_id INTEGER REFERENCES stack_items(id) ON DELETE CASCADE,
  PRIMARY KEY (member_id, stack_item_id)
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
  accent      VARCHAR,
  gradient    VARCHAR,
  github_url  VARCHAR,
  demo_url    VARCHAR,
  doc_url     VARCHAR,
  published   BOOLEAN DEFAULT false,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Liaison projet <-> stack
CREATE TABLE project_stack (
  project_id    INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  stack_item_id INTEGER REFERENCES stack_items(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, stack_item_id)
);

-- Liaison projet <-> membres
CREATE TABLE project_members (
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  member_id  VARCHAR REFERENCES members(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, member_id)
);