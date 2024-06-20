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
            // "prettier/prettier": [
            //     "error",
            //     {
            //         semi: true,
            //         singleQuote: false,
            //         tabWidth: 4,
            //         trailingComma: "all",
            //         printWidth: 1000,
            //         bracketSpacing: true,
            //         arrowParens: "always",
            //         endOfLine: "crlf",
            //         singleAttributePerLine: true,
            //         jsxBracketSameLine: true,
            //     },
            // ],
            "brace-style": ["error", "allman"],
            "object-curly-spacing": ["error", "always"],
            "react/jsx-curly-spacing": ["error", { when: "always", children: true }],
            "no-undef": "off",
            "linebreak-style": ["error", "windows"],
            "no-multi-spaces": ["error"],
            "key-spacing": ["error", { beforeColon: false, afterColon: true }],
            "space-before-blocks": ["error", "always"],
            "space-in-parens": ["error", "never"],
            "array-bracket-spacing": ["error", "never"],
            ...typescriptPlugin.configs.recommended.rules,
        },
    },
    {
        ignores: ["node_modules", ".next", "out"],
    },
];
