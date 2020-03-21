module.exports = {
    root: true,
    parser: "@typescript-eslint/eslint-parser",
    plugins: [
        "@typescript-eslint/eslint-plugin"
    ],
    extends: [
        "eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ]
};