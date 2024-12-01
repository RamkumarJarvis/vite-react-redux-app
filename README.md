# Vite React Redux App

This project is a simple application built with **Vite**, **React**, **Redux**, and styled using **Tailwind CSS**. It demonstrates how to manage the state of a list of items using Redux and display them in either a table or list format. The project includes features like CRUD operations, search functionality, and popup-based updates.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete items from the list.
- **Search Functionality**: Search for specific items within the list.
- **Popup for Editing**: Update item details through a popup form.
- **State Management with Redux**: Manage the state of the list using Redux for predictable state transitions.
- **Styled with Tailwind CSS**: Clean and responsive design using utility-first CSS.

## Installation

Follow the steps below to get the project up and running locally.

### 1. Clone the repository

```bash
git clone https://github.com/RamkumarJarvis/vite-react-redux-app.git
cd vite-react-redux-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:3000`.

## Project Structure

- `src/`: Contains all the source code for the app.
  - `components/`: Contains React components used in the app (e.g., the list, search bar, and form).
  - `redux/`: Contains Redux slices and actions for state management.
  - `App.jsx`: Main entry point for the app.
  - `store.js`: Configures and sets up the Redux store.
  - `index.css`: Tailwind CSS import and custom styles.

## Technologies Used

- **Vite**: A next-generation, fast build tool for modern web development.
- **React**: A popular JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **React-Redux**: Official React bindings for Redux.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.

## Usage

1. **Add Item**: Click the 'Add Item' button to create a new item.
2. **Update Item**: Click on an item in the list to open the update form in a popup. Make changes and submit.
3. **Delete Item**: Click the delete button next to an item to remove it from the list.
4. **Search**: Use the search bar to find specific items in the list.
