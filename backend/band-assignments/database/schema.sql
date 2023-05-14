BEGIN TRANSACTION;

DROP TABLE IF EXISTS band_nickname;
DROP TABLE IF EXISTS sub_nickname;
DROP TABLE IF EXISTS band;
DROP TABLE IF EXISTS users;

CREATE TABLE band_nickname (
    band_nickname_id serial PRIMARY KEY,
    nickname varchar(50) NOT NULL
);

CREATE TABLE sub_band (
    sub_band_id serial PRIMARY KEY,
    sub_band_name varchar(50) NOT NULL
);

CREATE TABLE band (
    band_id serial PRIMARY KEY,
    band_name varchar(50) NOT NULL,
    band_nickname_id integer REFERENCES band_nickname(band_nickname_id),
    sub_band_id integer REFERENCES sub_band(sub_band_id)
);

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    last_name varchar(50),
    band_id integer REFERENCES band(band_id),
    image varchar(500)
);

COMMIT TRANSACTION;