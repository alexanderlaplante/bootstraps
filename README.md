# ES2015 Bootstrap 

### Overview

 * This will create a package.json that encompasses your projects **name**, **version**, **description**, and **entry point**.
  * The next step will be to initialize all dev dependencies which for this repo include: 
    1. babel-core
    2. babel-loader 
    3. babel-preset-latest
    4. babel-jest 
    5. jest (for testing purposes)
 * Next we will need to create a `index.js` and it's corresponding test `index.test.js` files
 * Lastly `.babrc` to tell **babel** what we are transpiling that should contain the the following JSON:
 ```
{
    "presets": [
        "latest"
    ]
}
```
### Setup

**Install Dependencies**
    
    npm install babel-core babel-loader babel-preset-latest—save-dev babel-jest jest --save-dev

*(Note: Before running the command above, make sure you have already created your project directory and ran the `npm init` command.*    

**Available Commands**

Command Description | Command
------------ | -------------
Run tests using Jest | `npm test`
Build project | `npm build`
Debug index.js file | `npm run debug`
Debug JS file | `node --inspect some-file-name`

### Quick Links
 * **Documentation on how imports and exports work**
   * [Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
   * [Exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
 * **Jest Testing**
   * [Docs](https://facebook.github.io/jest/docs/getting-started.html)
   * [Expects](https://facebook.github.io/jest/docs/expect.html#content) Methods