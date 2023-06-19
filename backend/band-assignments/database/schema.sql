BEGIN TRANSACTION;

DROP TABLE IF EXISTS nickname;
DROP TABLE IF EXISTS branch;
DROP TABLE IF EXISTS ensemble;
DROP TABLE IF EXISTS instrument;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS assignment;

CREATE TABLE nickname (
    nickname_id serial PRIMARY KEY,
    nickname varchar(50) NOT NULL
);

CREATE TABLE branch (
    branch_id serial PRIMARY KEY,
    branch_name varchar(50) NOT NULL,
    nickname_id integer REFERENCES nickname(nickname_id)
);

CREATE TABLE ensemble (
    ensemble_id serial PRIMARY KEY,
    ensemble_name varchar(50) NOT NULL,
    branch_id integer REFERENCES branch(branch_id)
);

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    last_name varchar(50),
    branch_id integer REFERENCES branch(branch_id),
    ensemble_id integer REFERENCES ensemble(ensemble_id),
    image varchar(500)
);

CREATE TABLE instrument (
    instrument_id serial PRIMARY KEY,
    instrument_name varchar(50) NOT NULL
);

CREATE TABLE assignment (
    assignment_id serial PRIMARY KEY,
    user_id integer REFERENCES users(user_id),
    instrument_id integer REFERENCES instrument(instrument_id),
    assigned_date date NOT NULL
);

COMMIT TRANSACTION;