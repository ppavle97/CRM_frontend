# SBG - React Assignment

**Welcome to our Silver Bell Group assignment! This project showcases the power and flexibility of React for building modern web applications with purpose for presenting users list with different opportunity for search. User can login, register and logut.**

# Features

- **Component-based Architecture:** Utilizes React's component-based architecture for building reusable UI elements.
- **State Management with Redux:** Implements Redux for managing application state in a predictable and centralized manner.
- **Routing with React Router:** Utilizes React Router for handling navigation and routing between different views.
- **Responsive Design:** Ensures the application is fully responsive and works seamlessly across various devices and screen sizes.
- **Server Functionality:** Demonstrates how to user json web server and create function for random data seeding.
- **API Integration:** Demonstrates how to integrate with external APIs to fetch and display data dynamically.
- **CSS Modules:** Utilizes CSS Modules for scoped styling, preventing style conflicts and improving maintainability.
- **Unit Testing:** Includes unit tests using Jest to ensure code quality and reliability.
- **Snapshot Testing:** Includes snapshot tests using Jest to ensure code quality and reliability.
- **Advanced Data Handling:** Showcases multiple methods for sorting, filtering, searching, and pagination, combined with URL query changes for a seamless user experience.
- **TypeScript Integration:** Utilizes TypeScript to enhance code quality with static type checking and improved developer experience.
- **Custom Hooks:** Implements custom React hooks to encapsulate and reuse complex logic.
- **Error Boundary:** Implements error boundaries to gracefully handle JavaScript errors in the component tree.

# Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/*************
   ```

2. Navigate into the project directory:

   ```bash
   cd CRM_frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```


4. Start the backend app:
    - Check backend README file

5. Start the frontend app

     ```bash
     npm run dev
     ```

6. Open your browser and visit `http://localhost:5173` to view the application.

# Project Structure

```
CRM_frontend/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Higher-level pages
│   ├── router/            # Routing system using react-router-dom
│   ├── store/             # Redux setup, actions, reducers devided inside features and custom hooks for handling store data
│   ├── theme/             # Global config for App theme (breakpoints, colors, fonts, etc.)
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Entry point
├── public/                # Public assets and HTML template
└── README.md              # Project documentation
```

# How Application works

## Components

### Layout

The Layout component is the main structural component of the application. It includes the **Header**, **Modal** component and wraps the main content area where different pages are rendered.

- **Modal**: Provides right modal content depending on modal type state
- **Header**: Displays the header content of the application.

### Users

The Users component is the main component for displaying full list of users. 

### Modals

Modals represents reusable HOC which can have different content(**LogIn**, **Register** or success modals contents) depending on current modal type.


### Pagination

Component for handling pagination UI and Logic

### ModalIput

Custom Input for modal forms

## Pages

### Home page

The Home page (/) have two different views, one is for logged user and one is for non-authenticated users.
If user is not logged it appears to see just two buttons for opening Sing In or Sign Up modals.
On the other hand, if user is logged in, user can see welcome message with his informations and button for logout. Bellow welcome message user will see **paginated** and **searchable** list of users.

### PageNotFound

The "Page Not Found" page is displayed when a user attempts to access a URL that does not exist within the application. This ensures that users are informed of invalid or non-existent routes and are guided back to a valid part of the application.

- **Error Handling:** Detects when a user navigates to a non-existent page.
- **User Guidance:** Provides a message informing the user that the page they are looking for does not exist.
- **Navigation Options:** Includes links to navigate back to the dashboard page.

# Bonus Points to standup

- Implement Modal functionality
- Searchable list with query save
- Paginated list with query save
- Unit & Snapshot test
- Redux Store & Thunk

# License

This project is licensed under the SBG License
