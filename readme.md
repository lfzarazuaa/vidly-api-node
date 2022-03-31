# Introduction

This project is the backend of Vidly, an imaginary video rental app. I've used Vidly as an example in several of my online programming courses, such as:

- [Mastering React](https://codewithmosh.com/p/mastering-react)
- [The Complete Node JS Course](https://codewithmosh.com/p/the-complete-node-js-course)
- [ASP NET MVC](https:///codewithmosh.com/p/asp-net-mvc)

This is the implementation of Vidly in Node.js.

## Setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.

[Install Mongo Manual](https://docs.mongodb.com/manual/installation/)

Once you install MongoDB, make sure it's running.

### Install the Dependencies

Next, from the project folder, install the dependencies:

    npm i

### Populate the Database

    node seed.js

### Run the Tests

You're almost done! Run the tests to make sure everything is working:

    npm test

All tests should pass.

### Start the Server

    node index.js

This will launch the Node server on port 3900. If that port is busy, you can set a different point in config/default.json.

Open up your browser and head over to:

[API GENRES](http://localhost:3900/api/genres)

You should see the list of genres. That confirms that you have set up everything successfully.

### (Optional) Environment Variables

If you look at config/default.json, you'll see a property called jwtPrivateKey. This key is used to encrypt JSON web tokens. So, for security reasons, it should not be checked into the source control. For a production scenario, you should store this key as an environment variable.

On Mac:

    export vidly_jwtPrivateKey=yourSecureKey

On Windows:

    set vidly_jwtPrivateKey=yourSecureKey

You can also create the .env files to run depending your command selected on package.json.

Store the secret key on files .env at ´/´ level:

- .env:

      ```console
      vidly_jwtPrivateKey=jetSecretKeyForDefaultEnvironment
      db:mongodb://localhost/vidly
      ```

- .env.development:

      ```console
      NODE_ENV=development
      vidly_jwtPrivateKey=jetSecretKeyForDevelopmentEnvironment
      db:mongodbConecctionStringForDevelopmentEnvironment
      ```

- .env.test:

      ```console
      NODE_ENV=test
      vidly_jwtPrivateKey=jetSecretKeyForTestEnvironment
      db:mongoDBconecctionStringForTestEnvironment
      ```

- .env.production:

      ```console
      NODE_ENV=production
      vidly_jwtPrivateKey=jetSecretKeyForProductionEnvironment
      db:mongoDBconecctionStringForProductionEnvironment
      ```

For configurations that are not sensible use the .json files, the custom-enviroment-variables.json will be the one that reads from the .env files the secrets.

- default.json:

        ```json
        {
          "port": "3900",
          "requiresAuth": false
        }
        ```

- development.json:

        ```json
        {
          "port": "3901",
          "requiresAuth": true
        }
        ```

- test.json:

        ```json
        {
          "port": "3905",
          "requiresAuth": true
        }
        ```

- production.json:

        ```json
        {
          "port": "5000",
          "requiresAuth": true
        }
        ```
