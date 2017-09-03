module.exports = {
    "extends": [
        "airbnb",
        "plugin:flowtype/recommended"
    ],
    "env": {
        "jest": true
    },
    "rules": {
        "semi": [2, "never"],
        "no-unexpected-multiline": 2,
        "compat/compat": 2
      },
    "plugins": [
        "compat",
        "flowtype"
    ]
};