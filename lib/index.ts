import { LoadContext } from "@docusaurus/types";
import Dotenv from "dotenv-webpack";
import { Configuration } from "webpack";

const DEFAULT_OPTIONS: Dotenv.Options = {
  path: "./.env", // The path to your environment variables.
  safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
  systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
  silent: false, //  If true, all warnings will be suppressed
  expand: false, // Allows your variables to be "expanded" for reusability within your .env file
  defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
};

module.exports = function (
  context: LoadContext,
  opts: Partial<Dotenv.Options>
) {
  const options: Dotenv.Options = { ...DEFAULT_OPTIONS, ...opts };

  return {
    name: "docusaurus2-dotenv",
    configureWebpack(config: Configuration, isServer: boolean) {
      return {
        plugins: [new Dotenv(options)],
        module: {
          rules: [],
        },
      };
    },
  };
};
