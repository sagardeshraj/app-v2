// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js }, 
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } } 
  },
  tseslint.configs.recommended,
  prettierConfig
]);
