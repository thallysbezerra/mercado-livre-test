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

   -  chai
   -  enzyme
   -  enzyme-adapter-react-16
   -  node-sass
   -  react-test-renderer

   </details>

-  **Server**: Node.js

## API

-  API call using `fetch`, without external dependencies.
-  Success, requesting and error feedback combining `fetch` and `catch` with switch statement.

## CSS

-  All CSS/SCSS theme files are imported on `Theme.scss`.
-  Animations on `:hover` in buttons to give feedback of interaction to user.
-  B.E.M. (Block Element Modifier) class naming methodology.
-  Breakpoints as mixin, included inside own selector in order to facilitate maintenance.
-  Colors declarated as variables on `Colors.scss`.
-  CSS Grid and CSS Flexbox to define layout structures.
-  Disabled links are using pointer-events: none to prevent possibilities of click.
-  Each component have your own SCSS file.
-  Font-family Nunito imported from Google Fonts on file `Fonts.scss`.
-  Icons using Font Awesome as `@font-face` imported from CDN.
-  `@keyframes` animations are imported from `Animations.scss`.
-  Mobile first with four breakpoints on file `Breakpoints.scss`using:
   -  Only on mobile: Screen resolution <= 767px.
   -  Tablet portrait mode: Screen resolution >= 768px.
   -  Tablet landscape mode: Screen resolution >= 1024px.
   -  Desktop: Screen resolution >= 1280px.
-  `Normalize.css` was used to set the same initial styles to all HTML elements.
-  Some animations combining `@keyframes` with `transition`.
-  Using SASS/SCSS.

## HTML

-  HTML5 following W3C Standards recommendations.
-  Favicon generated on https://www.favicon-generator.org/

## Javascript

-  Arrow functions instead of `bind.this`, simplifying code.
-  Combining `.map` and `slice()` to list items from API.
-  Components with multi functionalities are located on directory `/widgets`.
-  Destructuring of states and props to keep a clean code and declarative.
-  `onKeyPress` attributes to provide better UI interaction.
-  `PropTypes` to better component maintenance and understanding.
-  Reusable components are located on directory `/components`.
-  Some components are stateless, focused on performance.
-  Validation if `<Button />` is disabled based on data entrance in `<InputText />`.

## Tests

-  In specific situations was applied TDD (Test Driven Development) concepts.
-  Jest as test runner inside create-react-app.
-  Simple tests to verify if application is rendering without crashing and initial states are initializing correctly.
-  Statics components with snapshots tests to avoid components changes.
-  Testing if data as number, is entering and returning correctly on `monetaryMask()` function.

# Instructions to run tests

-  `npm test`, or `yarn test` on root directory to run application tests.

# Instructions to run locally

-  `npm install`, or `yarn` on root directory to install dependencies.
-  `npm start` or `yarn start` to run the project locally.

# Instructions to run online

-  Access https://ml-test.firebaseapp.com/.
