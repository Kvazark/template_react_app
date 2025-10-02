import globals from 'globals'
import jsConfig from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    // Общие игнорируемые директории вместо файла .eslintignore
    {
        ignores: ['node_modules/**', 'dist/**', 'bin/**', 'public/**', 'build/**', 'configs/**'],
    },
    // Базовые рекомендации JS
    jsConfig.configs.recommended,
    // Конфиг для TS, JSX, React
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            parser: tsParser,
            sourceType: 'module',
            ecmaVersion: 'latest',
            globals: globals.browser,
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
            'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
            'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: false }],
        },
    },
    // Файлы конфигураций
    {
        files: ['**/*.config.js', 'webpack.config.ts', 'eslint.config.js'],
        languageOptions: { globals: globals.node },
    },
    // Глобальные переменные для Jest
    {
        files: ['**/*.test.{js,ts,jsx,tsx}'],
        languageOptions: { globals: globals.jest },
    },
    // Подключение prettier как последний элемент
    prettierConfig,
]