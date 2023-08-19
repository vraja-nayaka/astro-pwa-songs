/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" }
    }
  ],
  trailingComma: "none",
  semi: false,
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false
}
