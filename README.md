# Drum Roulette

![DR-LandingPage](https://github.com/RubySpeeders/Drum-Roulette/public/assets/images/DR-landingPage-Screenshot.png?raw=true)

Drum Roulette is a web application built using [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/) on the frontend. Its purpose is to facilitate the random assignment of US Military band percussionists to instruments for specific jobs.

## Features

- Randomly assign percussionists to instruments for jobs and ceremonies.
- Efficiently distribute workload among percussionists.
- User-friendly interface for managing percussion assignments.

## Technologies Used

- Next.js
- TypeScript
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

## Coding Standards and Guidelines

To ensure a consistent code style across the project, we use Prettier as our code formatter. Please make sure to have the Prettier extension installed in your editor and configure it to match the project's Prettier settings.

If you prefer to manually format your code, you can run the following command before committing your changes:

```shell
npx prettier --write .
```

This command will format all files in the current directory and its subdirectories according to the Prettier configuration.

Please avoid committing code with formatting inconsistencies, as it helps maintain a clean and readable codebase.

Imports in `.tsx` files should follow the following order:

- React/Next.js Imports
- Library Imports
- Type/Interface Imports
- Other Component Imports
- Styles or CSS Imports
- Constants or Config Imports

## Development Workflow & Contributing

Contributions are welcome! If you'd like to contribute to this project, please make sure to follow the code formatting guidelines defined by Prettier. This ensures consistent code style and makes it easier to review and merge your contributions. If you'd like to contribute to Drum Roulette, please follow these guidelines:

1. Clone the repository
2. Create a new branch for your feature: `git checkout -b DR-[issue-number]-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push the changes to your forked repository: `git push origin DR-[issue-number]-feature-name`
5. Submit a pull request detailing your changes

## Deployment

Our front-end application is automatically deployed through the following process:

**Version Control System:**

- The source code for the front-end is version-controlled using Git.

**Continuous Integration:**

- We utilize continuous integration (CI) to automate the testing and building processes. The CI system monitors changes in the repository and triggers the build process.

**Build Process:**

- The build process is handled by Next.js and Vercel. On each merge to the **`main`** branch, Next.js compiles the application code, assets, and dependencies into a deployable format.

**Deployment Trigger:**

- Deployment is triggered when changes are merged into the **`main`** branch. This is achieved through the integration between Next.js and Vercel.

**Deployment to Vercel:**

- Vercel, our hosting provider, automatically deploys the application based on the changes in the **`main`** branch. The deployment includes updating the live version of the application.

### **Setting Up a Deployment Schedule:**

While our current deployment process is triggered on each push to the **`main`** branch, we are considering the implementation of a deployment schedule for more controlled releases. The schedule might involve deploying updates at specific times or on particular days to align with project milestones or user expectations.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions regarding the Musician Personnel Assignment Project, please feel free to reach out:

- Email: [Sarah](sarahnpeters@gmail.com) or [Charlotte](chopekies@gmail.com)
- Github: [Sarah](https://github.com/RubySpeeders) or [Charlotte](https://github.com/charlottekies)
