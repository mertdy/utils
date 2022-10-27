module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'avoid',
  bracketSameLine: true,
  overrides: [
    {
      files: '*.component.html',
      options: {
        parser: 'angular'
      }
    },
    {
      files: '*.html',
      options: {
        parser: 'html'
      }
    }
  ]
};
