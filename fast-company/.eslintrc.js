module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error",
    semi: [2, "always"],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    "multiline-ternary": ["off"]
  }
};
