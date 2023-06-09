DROP DATABASE IF EXISTS devstack_dev;
CREATE DATABASE devstack_dev;

\c devstack_dev;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE projects (
 id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 title VARCHAR(50) NOT NULL,
 description TEXT NOT NULL,
 tech TEXT[],
 image VARCHAR(200),
 github_link VARCHAR(200),
 demo_link VARCHAR(200),
 is_favorite BOOLEAN,
 created_on DATE,
 updated_on DATE 
);
