# Overview

- `rehoku` is using vanilla Javascript and React syntax without any external libs or modules for handling things with less boilerplate code in development, which saves time and expands reusability of components.

---

### Links for Github Repository and Npm Website

- [npmjs.com/rehoku](https://www.npmjs.com/package/rehoku?activeTab=readme)

- [github.com/Rehoku](https://github.com/latids/Rehoku)

---

## Installation

- `npm i rehoku`
- `yarn add rehoku`
- `pnpm add rehoku`

# Changelog

### In version 0.3.7:

The final version of the build & import & export process. From now on, I will use ESM format for bundling. The issue with auto-importing is likely related to IDE caching or putting unused node_modules to sleep for performance optimization. If not, please enlighten me. Whenever I open index.js (the package's root index file) and keep it on top of the workspace's open files, auto-import suggestions are functioning properly. Import Hook manually like this `import {useToggle} from 'rehoku' ` and it will suggest automatically thereafter.

# Documentation

For documentation = [Rehoku/Documentation](https://github.com/latids/Rehoku/blob/main/documentation/DOCUMENTATION.MD)
