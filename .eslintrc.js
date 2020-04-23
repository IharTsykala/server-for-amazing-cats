module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "jsx-quotes": ["warn", "prefer-double"],
    "semi-style": ["warn", "last"],
    "no-plusplus": "off",
    "eol-last": "warn",
    "max-len": ["warn", 80, { ignoreUrls: true, ignoreStrings: true }],
    "no-tabs": "off",
    indent: ["warn", 2],
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        doubleQuote: true,
        endOfLine: "auto",
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".js"] },
    ],
    "react/jsx-props-no-spreading": "off",
    "react-redux/prefer-separate-component-file": "off",
  },
}
