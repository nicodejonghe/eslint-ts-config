module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "jasmine": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    "rules": {
        "array-bracket-newline": [
            "error",
            {
                "multiline": true,
                "minItems": 2
            }
        ]
    },
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "parserOptions": {
                "project": [
                    "tsconfig.json",
                    "e2e/tsconfig.json"
                ],
                "createDefaultProgram": true
            },
            "extends": [
                "eslint:recommended",
            ],
            "rules": {
                "unused-imports/no-unused-imports": "error",
                "unused-imports/no-unused-vars": [
                    "error",
                    {
                        "vars": "all",
                        "varsIgnorePattern": "^_",
                        "args": "after-used",
                        "argsIgnorePattern": "^_"
                    }
                ],
                "no-multi-spaces": "error",
                "getter-return": "error",
                "comma-spacing": ["error", { "before": false, "after": true }],
                "constructor-super": "error",
                "curly": "error",
                "arrow-spacing": "error",
                "indent": [
                    "error",
                    2
                ],
                "no-trailing-spaces": "error",
                "object-curly-spacing": [
                    "error",
                    "always",
                    {
                        "objectsInObjects": false,
                        "arraysInObjects": false
                    }
                ],
                "quotes": [
                    "error",
                    "single"
                ],
                "autofix/no-debugger": "error",
                "@typescript-eslint/explicit-function-return-type": ["error"],
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {"overrides": {"constructors": "off"}}
                ],
                "@typescript-eslint/no-use-before-define": "error",
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        "selector": "enumMember",
                        "format": ["PascalCase"]
                    },
                    {
                        "selector": "typeAlias",
                        "format": ["PascalCase"]
                    },
                    {
                        "selector": "variable",
                        "types": ["boolean"],
                        "format": ["PascalCase"],
                        "prefix": [
                            "can",
                            "has",
                            "is",
                            "show",
                            "should"
                        ]
                    },
                    {
                        "selector": "variableLike",
                        "format": ["camelCase"]
                    },
                    {
                        "selector": "variable",
                        "format": [
                            "camelCase",
                            "UPPER_CASE"
                        ],
                        "leadingUnderscore": "allow",
                        "trailingUnderscore": "allow"
                    }
                ],
            },
            "plugins": ["unused-imports", "autofix"]
        },
        {
            "files": [
                "*.html"
            ],
            "rules": {}
        }
    ]
}