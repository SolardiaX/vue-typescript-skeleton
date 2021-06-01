# vue-typescript-skeleton

A skeleton for use vue 3 + antd with typescript.

## Usage

Make sure `yarn` cli is installed in your system. Download and unzip this repo to your project root path.

Execute `'yarn'` or `'yarn install'` or `'yarn upgrade'`.

Use `'yarn add -D xxx'` or `'yarn add xxx'` to add your dependencies.

Now you can use vue 3 with typescript.


## Configurations

* [babel](babel.config.js)
* [prettier](prettier.config.js)
* [stylelint](stylelint.config.js)
* [vue](vue.config.js)
* [tsconfig](tsconfig.json)
* Types define for TS (See types/*)
* Others (See .* files in project)
* Repository Redirect (Used for users in Mainland China)

## Dependencies

* ant-design-vue: ^2.1.6
* axios: ^0.21.1"
* core-js: ^3.6.5"
* enquire.js: ^2.1.6"
* lodash: ^4.17.21"
* vue: ^3.0.0"
* vue-i18n: ^9.1.6"
* vue-router: ^4.0.0"
* vuex: ^4.0.1"

## DevDependencies

* @types/lodash: ^4.14.170
* @typescript-eslint/eslint-plugin: ^4.25.0
* @typescript-eslint/parser: ^4.25.0
* @vue/cli-plugin-babel: ^4.5.13
* @vue/cli-plugin-eslint: ^4.5.13
* @vue/cli-plugin-router: ^4.5.13
* @vue/cli-plugin-typescript: ^4.5.13
* @vue/cli-plugin-vuex: ^4.5.13
* @vue/cli-service: ~4.5.0
* @vue/compiler-sfc: ^3.0.0
* @vue/eslint-config-typescript: ^7.0.0
* autoprefixer: ^9
* babel-eslint: ^10.1.0
* babel-plugin-import: ^1.13.3
* compression-webpack-plugin: ^8.0.0
* eslint: ^7.27.0
* eslint-config-prettier: ^8.3.0
* eslint-plugin-prettier: ^3.4.0
* eslint-plugin-vue: ^7.0.0
* less: ^4.1.1
* less-loader: ^9.0.0
* lint-staged: ^11.0.0
* lodash-webpack-plugin: ^0.11.6
* postcss: ^7
* prettier: ^2.3.0
* tailwindcss: npm:@tailwindcss/postcss7-compat
* terser-webpack-plugin: ^5.1.3
* typescript: ^4.3.2
* vue-eslint-parser: ^7.6.0"


## Issues

* Cannot use postcss 8 with tailwindcss as Vue 3 does not support it.

The following error message may be received when performing initialization, but it does not affect the use:

* "@vue/cli-plugin-eslint#eslint@>= 1.6.0 < 7.0.0" doesn't satisfy found match of "eslint@7.27.0"
* "compression-webpack-plugin#webpack@^5.1.0" doesn't satisfy found match of "webpack@4.46.0"
* "less-loader#webpack@^5.0.0" doesn't satisfy found match of "webpack@4.46.0"
* "terser-webpack-plugin#webpack@^5.1.0" doesn't satisfy found match of "webpack@4.46.0"
* "@vue/cli-plugin-eslint#eslint-loader#eslint@>=1.6.0 <7.0.0" doesn't satisfy found match of "eslint@7.27.0"
