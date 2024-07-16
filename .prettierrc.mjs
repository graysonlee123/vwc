/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  trailingComma: 'es5',
  arrowParens: 'always',
  bracketSpacing: true,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
};
