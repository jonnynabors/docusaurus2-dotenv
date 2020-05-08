A Docusaurus2 plugin that supports dotenv and other environment variables and only exposes what you choose and use

### Installation

Install the package in your repository

`npm install docusaurus2-dotenv`

or

`yarn install docusaurus2-dotenv`

### Description

The `docusaurus2-dotenv` plugin wraps the `dotenv-webpack` library to allow the usage of `.env` files in Docusaurus2 projects. This allows you to access your environment variables via `process.env.VARIABLE_NAME` in your code.

### Usage

The plugin can be used "out of the box" using the standard configuration. In your `docusaurus.config.js` file, add the following to your `plugins` block.

```javascript
docusaurus.config.js

module.exports = {
    ..., // other Docusaurus2 settings
    plugins: [
        'docusaurus2-dotenv'
    ],
    ... // other Docusaurus2 settings
}
```

### Properties

Use the following properties to configure your instance.

- **path** (`'./.env'`) - The path to your environment variables.
- **safe** (`false`) - If true, load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
- **systemvars** (`false`) - Set to true if you would rather load all system variables as well (useful for CI purposes).
- **silent** (`false`) - If true, all warnings will be suppressed.
- **expand** (`false`) - Allows your variables to be "expanded" for reusability within your `.env` file.
- **defaults** (`false`) - Adds support for `dotenv-defaults`. If set to `true`, uses `./.env.defaults`. If a string, uses that location for a defaults file.

```javascript
docusaurus.config.js

module.exports = {
    ..., // other Docusaurus2 settings
    plugins: [
        'docusaurus2-dotenv',
        {
            path: "./.env", // The path to your environment variables.
            safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
            systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
            silent: false, //  If true, all warnings will be suppressed
            expand: false, // Allows your variables to be "expanded" for reusability within your .env file
            defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
        }
    ],
    ... // other Docusaurus2 settings
}
```

#### Recommended

Add `.env` to your `.gitignore` file
