-- **************************************************************
-- This script destroys the database and associated users
-- **************************************************************

-- The following line terminates any active connections to the database so that it can be destroyed
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = :'DATABASE_NAME';


-- Drop the database
DROP DATABASE IF EXISTS :DATABASE_NAME;
DROP USER :DATABASE_OWNER;
DROP USER :DATABASE_USER;
