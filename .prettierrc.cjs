// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    trailingComma: "es5",
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    endOfLine: 'auto',
    plugins: ["prettier-plugin-tailwindcss"],
  };
  
  module.exports = config;