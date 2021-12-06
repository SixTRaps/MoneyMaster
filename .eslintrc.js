module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    rules: {
        indent: ["error", 2, { SwitchCase: 1 }],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": 1,
    },
};
