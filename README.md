# next-ts

# Branches
This repository consists of 2 branches:

1. main – A minimal Nextjs setup with TypeScript + Shadcn UI. (You're currently on this branch.)
2. with-shadcn – All features of basic and shadcn component library.

## Description

This project is a quickstart for next.js with typescript.

## Features

- **Yarn**: Manage your packages with lightning speed and rock-solid reliability.
- **Typescript**: Say goodbye to runtime errors. Write safer and more reliable code with TypeScript.
- **TailwindCSS**: Unleash your creativity with low-level utility classes.
- **Biome.js**: Keep your code clean and consistent with this linter and formatter.
- **Husky**: Keep your project's history clean with Git hooks.
- **Lint Staged**: Only worry about the files you've changed.
- **Commitlint**: Make every commit count with commit message linting.
- **Multiple Env Support**: Adapt to any environment: local, dev, stage, or prod.
- **VS code settings**: Save time and keystrokes with auto-format and import sort.
- **ShadcnUI**: Craft beautiful UIs with this comprehensive component library.
- **Redux Toolkit**: Simplify global state management with Redux Toolkit's powerful and easy-to-use API.
- **Zod**: Ensure data integrity with Zod's robust schema validation.
- **React Hook Form**: Build performant and flexible forms with minimal code using React Hook Form.
- **date-fns**: Handle dates effortlessly with date-fns' comprehensive utility functions.

## Installation

This project uses yarn. Go through the following steps to set up the project on your local machine:

1. Clone the repository: `git clone <repository-url>`
2. Install yarn packages: `yarn install`

## Usage

To start the development server, run: `yarn dev:<env>`

For local development,
```sh
yarn dev:local
```

## Building and Serving

This project uses Vite for building and serving the application. Follow these steps to create a production build and serve it:

1. Create a production build: `yarn build:<env>`

2. Serve the production build: `yarn start`

Please note that you should run `yarn build:<env>` before `yarn start` to ensure that the latest build is being served.