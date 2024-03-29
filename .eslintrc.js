module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
  ignorePatterns: ["**/build/*", "**/public/*", "**/node_modules/*"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
