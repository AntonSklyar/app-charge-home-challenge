# app-charge-home-challenge

## Overview

This repository contains `app-charge-home-challenge`, a web application designed to display product bundles interactively. It functions as a page for users to view collections of products, each showcasing information on the number of items in stock, their cost, and a countdown to highlight limited-time deals. The application's design prioritizes simplicity, allowing for effortless navigation and interaction with product bundles.

## Application Details

The application presents an array of bundles, each containing a selection of products, the quantity available, a countdown timer, and the price for the bundle. In instances where products exceed the bundle's display capacity, navigation buttons are provided to view additional products.

## Technical Structure

The application is developed using the `React` library with `TypeScript`. Routing within the application is managed via the `react-router-dom` library, and the `styled-components` library is utilized for component styling. Code quality is maintained with `ESLint` and `Prettier`.

Dependency versions and configurations are specified within the `package.json` file. Installation of all dependencies is achieved through:

```sh
npm install
```

## Project Hierarchy

The project is organized into several directories, each serving a specific function:

### `components`
This directory holds UI components, with each component typically comprising:
- `.tsx` file: Contains the component's functional implementation.
- `.styled.tsx` file: Houses scoped styling using styled-components.
- `.types.tsx` file: Includes TypeScript type definitions for the component.

### `pages`
This directory includes page-level components like:
- `Store`: The main store page component.
- `PageNotFound`: Component displayed for undefined routes.

### `hooks`
Custom React hooks facilitating specific functionalities are stored here:
- `useDataFetcher`: Hook for fetching data from APIs or services.
- `useHorizontalScroll`: Hook to implement horizontal scrolling, useful in carousels.

### `utils`
Utility functions are located here, assisting in various operations:
- `getRandomDelayPromise.ts`: Simulates server response delays.
- `getTimeLeft.ts`: Converts milliseconds to a human-readable time format (hh:mm:ss).

### `styles`
The `styles` directory is responsible for the visual theme and global styling of the application:

- `GlobalStyles.ts`: Defines global styles that are applied throughout the application, ensuring consistency in the visual design.
- `theme.ts`: Contains theme-specific properties such as colors, fonts, and other design tokens. This theme object is used by the `ThemeProvider` component to provide consistent theming.


### `constants`
Contains application-wide constants such as:
- `BUNDLES`: Data related to product bundles.

## Running the Application

To launch the application in development mode, the following command is used:

```sh
npm start
```