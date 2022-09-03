module.exports = {
  extends: [
    "@so1ve/stylelint-config-basic",
    "@so1ve/stylelint-config-scss",
  ],
  overrides: [
    {
      files: [
        "*.vue",
        "**/*.vue",
        "*.html",
        "**/*.html",
      ],
      customSyntax: require("postcss-html")(),
    },
  ],
};
