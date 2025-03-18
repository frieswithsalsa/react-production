import { defineConfig } from 'eslint-define-config';
import airbnbConfig from 'eslint-config-airbnb';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import i18nextPlugin from 'eslint-plugin-i18next';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        __IS_DEV__: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      i18next: i18nextPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'react/jsx-indent': [2, 4],
      'react/jsx-indent-props': [2, 4],
      indent: [2, 4],
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'warn',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      'i18next/no-literal-string': [
        'error',
        { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
      ],
      'max-len': ['error', { code: 300, ignoreComments: true }],
      'jsx-ally/no-static-element-interactions': 'off',
      'jsx-ally/click-events-have-key-events': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'no-param-reassign': 'off',
    },
  },
  {
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off',
    },
  },
]);
