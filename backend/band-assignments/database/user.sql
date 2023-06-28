-- ********************************************************************************
-- This script creates the database users and grants them the necessary permissions
-- ********************************************************************************

CREATE USER :DATABASE_OWNER WITH PASSWORD :DATABASE_PASSWORD;

GRANT ALL
ON ALL TABLES IN SCHEMA public
TO :DATABASE_OWNER;

GRANT ALL
ON ALL SEQUENCES IN SCHEMA public
TO :DATABASE_OWNER;

CREATE USER :DATABASE_USER WITH PASSWORD :DATABASE_PASSWORD;

GRANT SELECT, INSERT, UPDATE, DELETE
ON ALL TABLES IN SCHEMA public
TO :DATABASE_USER;

GRANT USAGE, SELECT
ON ALL SEQUENCES IN SCHEMA public
TO :DATABASE_USER;