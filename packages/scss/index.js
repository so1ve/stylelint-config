module.exports = {
  extends: [
    "@so1ve/stylelint-config-basic",
    "stylelint-config-standard-scss",
  ],
  plugins: [
    "stylelint-scss",
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
  rules: {
    "scss/at-rule-no-unknown": null,
    "scss/at-import-partial-extension": "always",
    "scss/at-mixin-pattern": null,
    "scss/no-global-function-names": null,
    "scss/dollar-variable-pattern": null,
  },
};
