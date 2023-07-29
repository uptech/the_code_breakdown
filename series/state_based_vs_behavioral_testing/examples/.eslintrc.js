module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: 'standard-with-typescript',
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    rules: {
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'sonarjs'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:sonarjs/recommended']
}
