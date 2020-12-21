### [create-react-app, eslint, mocha](https://www.andrewmin.info/blog/react-setup/)

---

1. Originally created by:

   ```shell
   $ npx create-react-app ms-frontend-test
   ```

1. `eslint` init:

   ```shell
   $ npx eslint --init
   ```

1. dowengrade eslint version:

   > ^7.16.0 to ^6.6.0

1. reinstall:

   ```shell
   $ rm -rf node_modules package-lock.json
   $ npm install
   $ npm install --save-dev babel-eslint
   ```

1. config `.eslintrc.json`:

   > "parser": "babel-eslint"

1. Prettier
   ```shell
   $ npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev
   ```
1. Mocha, chai

```shell
$ npm install -D eslint-plugin-mocha mocha, chai
```

### Optional

---

```shell
$ exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/karlhadwen/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
```
