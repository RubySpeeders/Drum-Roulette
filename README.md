# US-Navy-Project

## Setup Backend for Local Development
### TL;DR 
The backend is in Spring Boot and PostgreSQL. The spring boot application serves resources to the front end from the database. 
To begin development, you'll need:
- Java 17
- PostgreSQL

### Setup Steps
- [ ] Install Java 17 
- [ ] Install PostgreSQL
- [ ] Initialize the database in backend/band-assignments/database
  - [ ] `cd backend/band-assignments/database`
  - [ ] Review schema.sql. Change the initial data in initial-data.sql to any test data you'd like. I'd suggest you don't commit any real names to GitHub.
  - [ ] `touch start.sh`
  - [ ] `nano start.sh` or `sudo nano start.sh`
  - [ ] Enter the following to start.sh:
    ```
    #!/bin/bash
     export DATABASE_OWNER=america
     export DATABASE_PASSWORD=godbless
     export DATABASE_USER=puertorico
     export DB_URL=jdbc:postgresql://localhost:5432/band
     export DATABASE_NAME=band
            
     chmod +x create_db.sh
            
     ./create_db.sh

  
- [ ] `./start.sh`

Enter in your password for postgres each time you are prompted. If all goes well, this process should generate an initial database. 
- [ ] Build the Spring Boot project
- [ ] Edit configuration to include the following environment variables:
  - [ ] SERVER_PORT 
  - [ ] DATABASE_NAME
  - [ ] DATABASE_OWNER
  - [ ] DATABASE_PASSWORD
  - [ ] PORT (refers to Database)
  These must match the values you chose for your test database
- [ ] Run the application