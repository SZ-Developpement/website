-- Drop dans le bon ordre (contraintes FK d'abord)
DROP TABLE IF EXISTS project_members CASCADE;
DROP TABLE IF EXISTS project_stack CASCADE;
DROP TABLE IF EXISTS member_stack CASCADE;
DROP TABLE IF EXISTS stack_items CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS members CASCADE;
DROP TABLE IF EXISTS admins CASCADE;

-- Admins
CREATE TABLE admins (
  id         SERIAL PRIMARY KEY,
  email      VARCHAR UNIQUE NOT NULL,
  password   VARCHAR NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Membres
CREATE TABLE members (
  id           VARCHAR PRIMARY KEY,        -- ex: "alexis-djs"
  email        VARCHAR UNIQUE,
  password     VARCHAR,
  name         VARCHAR NOT NULL,
  alias        VARCHAR,                    -- @Flytzi
  role         VARCHAR NOT NULL,           -- Fondateur & Développeur Full-Stack
  specialties  TEXT[],                     -- ["Full Stack", "Architecture"]
  formation    VARCHAR,                    -- BTS SIO SLAM - 1ère année
  localisation VARCHAR,                    -- France
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
  name     VARCHAR UNIQUE NOT NULL,        -- "Next.js"
  category VARCHAR NOT NULL,              -- "Frontend", "Backend"...
  icon     VARCHAR                        -- slug devicon ou URL
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
  type        VARCHAR NOT NULL,            -- "solo" | "team"
  status      VARCHAR NOT NULL,            -- "En cours" | "Terminé" | "À venir" | "archived"
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


-- Ajouter un membre 
INSERT INTO admins (email, password) 
VALUES ('ton@email.com', 'le_hash_ici');