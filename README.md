# Development Stack

-  **Assets extraction**: Figma

-  **Code editor**: Visual Studio Code

   <details>
   <summary>Important extensions</summary>

   -  Auto Rename Tag
   -  Auto-Open Markdown Preview
   -  Brackt Pair Colorizer
   -  VS Code ES7 React/Redux/React-Native/JS snippets
   -  ESLint
   -  GitLens
   -  JavaScript (ES6) code snippets
   -  Prettier - Code formatter
   -  SCSS formatter

   </details>

-  **CSS preprocessor**: SASS/SCSS

-  **Hosting**: Firebase

-  **Lib/Framework**: React.js using create-react-app

-  **Package manager**: NPM/Yarn

   <details>
   <summary>Dependencies</summary>

   -  node-sass

   </details>

-  **Server**: Node.js

## API

-  API call using `fetch`, without external dependencies.
-  Success, requesting and error feedback combining `fetch` and `catch` with ternaries.

## CSS

-  All CSS/SCSS theme files are imported on `theme`.
-  Animations on `:hover` in buttons to give feedback of interaction to user.
-  B.E.M. (Block Element Modifier) class naming methodology.
-  Breakpoints as mixin, included inside own selector in order to facilitate maintenance.
-  CSS Grid and CSS Flexbox to define layout structures.
-  Each component have your own SCSS file.
-  Mobile first with four breakpoints using:
   -  Only on mobile: Screen resolution <= 767px.
   -  Tablet portrait mode: Screen resolution >= 768px.
   -  Tablet landscape mode: Screen resolution >= 1024px.
   -  Desktop: Screen resolution >= 1280px.
-  Using SASS/SCSS.

## HTML

-  HTML5 following W3C Standards recommendations.
-  Favicon generated on https://www.favicon-generator.org/

## Javascript

-  Arrow functions instead of `bind.this`, simplifying code.
-  Destructuring of states and props to keep a clean code and declarative.
-  `.map` to list items from API.
-  `PropTypes` to better component maintenance and understanding.
-  Reusable components are located on directory `/components`.
-  Some components are stateless, focused on performance.

## Tests

-  Jest as test runner inside create-react-app.
-  Simple tests to verify if application is rendering without crashing and initial states are initializing correctly.
-  Statics components with snapshots tests to avoid components changes.

# Instructions to run tests

-  `npm test`, or `yarn test` on root directory to run application tests.

# Instructions to run locally

-  `npm install`, or `yarn` on root directory to install dependencies.
-  `npm start` or `yarn start` to run the project locally.

# Instructions to run online

-  Access
