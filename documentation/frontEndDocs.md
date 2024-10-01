# Frontend Documentation

## Introduction

Drum Roulette is a web application built using [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/) on the frontend. Its purpose is to facilitate the random assignment of US Military band percussionists to instruments for specific jobs.

Features:

- Randomly assign percussionists to instruments for jobs and ceremonies.
- Efficiently distribute workload among percussionists.
- User-friendly interface for managing percussion assignments.

## Getting Started

To get a local copy of the project up and running, follow these steps:

- Clone the repository: `git clone [https://github.com/RubySpeeders/Drum-Roulette]`
- Navigate to the client directory: `cd Drum-Roulette/client`
- Install the dependencies: `yarn install`
- Start the development server: `yarn dev`
- Open your browser and access the application at `http://localhost:3000`

## Project Structure

The project is bootstrapped with `create-next-app` and utilizes the Next.js [App Router](https://nextjs.org/docs/app). It currently includes the following pages and components:

**Pages**

- `/` - Landing page and choose which military branch to display on the `selection` page
- `/selection` - Select the musicians and instruments for assignment
- `/assignments` - Displays generated assignments from selected musicians and instruments

**Components**

Custom components for this project are located in the `client/src/components` directory of the project. Please reference this directory and use these components where appropriate when contributing to the frontend codebase.

## **Coding Standards and Guidelines**

To ensure a consistent code style across the project, we use Prettier as our code formatter. Please make sure to have the Prettier extension installed in your editor and configure it to match the project's Prettier settings. To do so, ensure that you have the Prettier extension installed and enabled.

If you prefer to manually format your code, you can run the following command before committing your changes:

```
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

## **User Interface (UI) Components**

- This project utilizes the [Material UI](https://mui.com/) component library for styling.
- We ask contributors to adhere to our convention of using PascalCase when creating new components.
- TODO: add styles and CSS classes once we have them.

## Types/Interfaces

Custom types and interfaces for this project are located in the `client/src/types` & `client/src/interfaces` directories of the project. Please reference this directory and use these where appropriate when contributing to the frontend codebase.

## **Routing**

The project utilizes the Next.js [App Router](https://nextjs.org/docs/app) for routing (see [Project Structure](https://www.notion.so/FE-Documentation-6724a14369094696991b657d456ae4cd?pvs=21)). Our current expected user path is:

`/` —> `/selection` <—> `/assignments`

## **State Management**

- We currently do not use any state management on the application. In future iterations, we would like to use the `useContext` hook, as Redux is probably too robust for our current needs.

## **API Integration**

- Our frontend interacts with the backend through AWS Gateway, a Postgres database and static images hosted on an AWS Lightsail instance, and AWS Lambdas.
- **Current Endpoints:**
  - **GET `/musicians`**
    - Returns all musicians in the database.
    - _Request:_
      - Method: GET
    - _Response:_
      - Status Code: 200 OK
      - Body: JSON Array of musician objects.
  - **GET `/musicians/navy`**
    - Returns all musicians in the Navy bands.
    - _Request:_
      - Method: GET
    - _Response:_
      - Status Code: 200 OK
      - Body: JSON Array of musician objects.
  - **GET `/musicians/army`**
    - Returns all musicians in the Army bands.
    - _Request:_
      - Method: GET
    - _Response:_
      - Status Code: 200 OK
      - Body: JSON Array of musician objects.
  - **GET `/musicians/air-force`**
    - Returns all musicians in the Air Force bands.
    - _Request:_
      - Method: GET
    - _Response:_
      - Status Code: 200 OK
      - Body: JSON Array of musician objects.
  - **GET `/musicians/marine-corps`**
    - Returns all musicians in the Marine Corps bands.
    - _Request:_
      - Method: GET
    - _Response:_
      - Status Code: 200 OK
      - Body: JSON Array of musician objects.
  - **GET `/branches`**
    - Returns all branches of the military.
    - _Request:_
      - Method: GET
    - _Response:_
      - Status Code: 200 OK
      - Body: JSON Array of branch objects.
  - **GET `/instruments` (this one has not been finished yet)**
    - Returns all instruments.
    - _Request:_
      - Method: GET
    - _Response:_
      - Status Code: 200 OK
      - Body: JSON Array of instrument objects.
- **Error Handling:**
  - Common error responses include:
    - **404 Not Found**
      - Meaning: The requested resource is not found.
      - _Response:_ JSON object with an error message.
    - **500 Internal Server Error**
      - Meaning: An unexpected error occurred on the server.
      - _Response:_ JSON object with an error message.
- **Additional Notes:**
  - Developers should expand into error handling for a more robust system.

## **Testing**

## **Development Workflow & Contributing**

Contributions are welcome! If you'd like to contribute to this project, please make sure to follow the code formatting guidelines defined by Prettier. This ensures consistent code style and makes it easier to review and merge your contributions. If you'd like to contribute to Drum Roulette, please follow these guidelines:

- Clone the repository
- Create a new branch for your feature: `git checkout -b DR-[issue-number]-feature-name`
- Make your changes and commit them: `git commit -m 'Add some feature'`
- Push the changes to your forked repository: `git push origin DR-[issue-number]-feature-name`
- Submit a pull request detailing your changes

## **Deployment**

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

## **License**

- This project is licensed under the MIT permissive software license.
