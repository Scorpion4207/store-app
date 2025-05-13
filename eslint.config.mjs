import globals from "globals";
import pluginPrettier from "eslint-plugin-prettier";
import pluginImport from "eslint-plugin-import";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint-define-config";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: pluginPrettier,
      import: pluginImport,
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "array-callback-return": "error",
      "no-array-constructor": "error",
      "prefer-object-spread": "error",
      "object-shorthand": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "no-console": "warn",
      "prefer-template": "error",
      "func-style": ["error", "expression"],
      "prefer-destructuring": ["error", { object: true, array: false }],
      "no-magic-numbers": ["warn", { ignore: [2] }],
      "no-unused-vars": [
        "error",
        {
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
      "require-await": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
]);
