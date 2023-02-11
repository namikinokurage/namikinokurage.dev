module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
