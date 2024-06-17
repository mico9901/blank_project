const js = require("@eslint/js");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const prettierPlugin = require("eslint-plugin-prettier");
const reactPlugin = require("eslint-plugin-react");

module.exports = [
    js.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json",
            },
        },
        plugins: {
            "@typescript-eslint": typescriptPlugin,
            prettier: prettierPlugin,
            react: reactPlugin,
        },
        rules: {
            "prettier/prettier": ["error"],
            "brace-style": ["error", "allman"],
            "object-curly-spacing": ["error", "always"],
            "react/jsx-curly-spacing": ["error", { when: "always", children: true }],
            "no-undef": "off",
            ...typescriptPlugin.configs.recommended.rules,
        },
    },
    {
        ignores: ["node_modules", ".next", "out"],
    },
];
