# eslint-ts-config

Create file in root of project .eslintrc.js

```angular2html
    module.exports = {
        ...require('@ndj/eslint-ts-config')
    } 
```

Configure your scripts in package.json

```angular2html
    "lint": "eslint . --ext .ts --fix --ignore-path .gitignore",
```