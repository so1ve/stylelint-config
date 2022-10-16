module.exports = {
  extends: [
    "@so1ve/stylelint-config-order",
    "stylelint-config-standard",
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
    "at-rule-no-unknown": null,
    "block-no-empty": null,
    "value-keyword-case": null,
    // e.g. :deep(.class) { ... }
    "selector-pseudo-class-no-unknown": null,
    "max-line-length": null,
    "no-descending-specificity": null,
  },
};
