# Musician Personnel Assignment Project

The Musician Personnel Assignment Project is a web application built using Next.js and TypeScript on the Front End. Its purpose is to facilitate the random assignment of band musicians to instruments for specific gigs.

## Features

- Randomly assign musicians to instruments for gigs.
- Efficiently distribute workload among musicians.
- Easy-to-use interface for managing musician assignments.

## Technologies Used

- Next.js
- TypeScript
- Java
- PostgreSQL

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository: `git clone [https://github.com/RubySpeeders/Drum-Roulette]`
2. Navigate to the project directory: `cd Drum-Roulette`
3. Install the dependencies: `yarn install`
4. Navigate to the FE directory: `cd client`
5. Install the dependencies: `yarn install`
6. Start the development server: `yarn dev`
7. Open your browser and access the application at `http://localhost:3000`

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
    ```

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

## Code Formatting

To ensure a consistent code style across the project, we use Prettier as our code formatter. Please make sure to have the Prettier extension installed in your editor and configure it to match the project's Prettier settings.

If you prefer to manually format your code, you can run the following command before committing your changes:

```shell
npx prettier --write .
```

This command will format all files in the current directory and its subdirectories according to the Prettier configuration.

Please avoid committing code with formatting inconsistencies, as it helps maintain a clean and readable codebase.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please make sure to follow the code formatting guidelines defined by Prettier. This ensures consistent code style and makes it easier to review and merge your contributions. If you'd like to contribute to the Musician Personnel Assignment Project, please follow these guidelines:

1. Fork the repository
2. Create a new branch for your feature: `git checkout -b DR-[issue-number]-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push the changes to your forked repository: `git push origin DR-[issue-number]-feature-name`
5. Submit a pull request detailing your changes

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions regarding the Musician Personnel Assignment Project, please feel free to reach out:

- Email: [Sarah](sarahnpeters@gmail.com) or [Charlotte](chopekies@gmail.com)
- Github: [Sarah](https://github.com/RubySpeeders) or [Charlotte](https://github.com/charlottekies)
