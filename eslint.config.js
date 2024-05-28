import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      'vue/script-setup-uses-vars': 'error',
      'vue/no-reserved-component-names': 'off',
      'vue/no-setup-props-destructure': 'off',
      'vue/custom-event-name-casing': 'off',
      'no-use-before-define': 'off',
      'no-unused-vars': 'off',
      'space-before-function-paren': 'off',

      'vue/attributes-order': 'off',
      'vue/one-component-per-file': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-explicit-emits': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
    },
    ignores: [
      'log/',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',
      'lerna-debug.log*',
      'node_modules/',
      'dist/',
      'dist-ssr/',
      'src/assets',
      'types/',
      '.env*',
      '*.local',
      '.*ignore',
      '.md',
      '.vscode/',
      '.idea/',
      '.git/',
      '.DS_Store/',
      '*.suo',
      '*.ntvs*',
      '*.njsproj',
      '*.sln',
      '*.sw?',
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
]
