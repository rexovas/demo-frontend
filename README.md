
# Crossix Assignment Front-End
## Author: David Lovas

This project is a basic React web application enabling users to interact with data provided by the National Center for Health Statistics concerning death rates for the top 10 causes of death in the United States.

This project requires a back-end API service to be running simultaneosly and accessible on localhost:5000 

## Running the  app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Alternatively you can run:

### `npm install && npm start`

This will install the required dependencies and run the app in the development mode.

## Troubleshooting

If you have trouble running the application, it may be due to conflicts caused by some of the dev dependencies.

### Example Error:

`There might be a problem with the project dependency tree.
It is ikely not a bug in Create React App, but something you need to fix locally.`

To fix this issue you can either create a file called `.env` in the project root directory and add the line `SKIP_PREFLIGHT_CHECK=true`
or remove the dev dependencies with
`yarn remove <package>` or `npm uninstall <package>` followed by deleting the files `yarn.lock` and `package.lock` if they exist
