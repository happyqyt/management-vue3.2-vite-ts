# management-vue3.2-vite-ts
vue3.2+vite+ts+elementplus+tailwindcss搭建的一个后台管理系统框架

# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# 命名规范
* 目录命名
参照项目命名规则，以中横线分割小写单词，按照通用写法可适当采用`复数`命名法。
例：`assets`, `styles`, `images`, `data-model`

* vue文件（组件）命名
大驼峰命名规则。文件名中禁止包含特殊符号，比如空格、`$`等。
例：`MainLayout.vue`，`App.vue`，`Dashboard.vue`

* 其他文件命名
参照目录命名规则，以中横线分割小写单词。按照通用写法可适当采用`复数`命名法。文件名中禁止包含特殊符号，比如空格、`$`等。
例：`account-model.ts`，`global-menu.json`，`error-report.html`

* 为了醒目，某些说明文件的文件名，可以使用全大写字母，比如：`README`，`LICENSE`