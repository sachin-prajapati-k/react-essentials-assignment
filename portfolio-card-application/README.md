# Portfolio Card Application
see the live site by this url : https://portfoliocardapplication.netlify.app/
A small React application that displays an interactive personal profile card. It focuses on component structure, props, styling, and basic state management for a clean, modern UI.

## Tech Stack

- React (Create React App)
- CSS for layout and styling

## Features

- **Reusable component structure**
  - Main `App` component provides data.
  - `ProfileCard` component renders the full card UI and handles all interactions.

- **Dynamic content via props**
  - `App` defines an array of profile objects and passes them to `ProfileCard` as the `profiles` prop.
  - Each profile contains:
    - `name`
    - `title`
    - `bio`
    - `skills` (array of skill strings)
    - `initialLikes`
  - `ProfileCard` renders the profile fields and maps `skills` into skill badges.

- **Interactivity and event handling**
  - **Theme toggle**
    - Button in the top-right corner and a chip in the footer toggle between light and dark themes.
    - The card’s background, text, and accents update based on the current theme.
  - **Profile photo cycling**
    - Clicking the circular avatar cycles through a small set of predefined profile photos.
  - **Profile switching**
    - Left (`‹`) and right (`›`) arrow buttons in the footer (just before the like counter) cycle between four different profiles.
    - The pager label shows the current profile index as `X / 4`.
  - **Contact alert**
    - The `Contact` button shows a browser alert including the current profile’s name.

- **State management**
  - Uses `useState` inside `ProfileCard` to manage:
    - Current theme (`light` or `dark`).
    - Current photo index for the avatar.
    - Current active profile index.
    - A likes array so each profile has its own like count.
  - Clicking the heart button increments the like count for the active profile and updates the displayed value immediately.

- **Styling and layout**
  - Centered card layout with soft shadows, rounded corners, and responsive spacing.
  - Skill badges, footer controls, and arrow buttons styled to resemble a modern profile/portfolio card.
  - Includes dark-mode variants for key elements.

## How to Run

```bash
npm install
npm start
```

The app runs on `http://localhost:3000` by default. Open it in a browser to interact with the profile card, switch profiles, toggle the theme, cycle the photo, and use the like and contact actions.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
