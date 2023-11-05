# API for MGTS router Sercomm RV6699

[![license](https://img.shields.io/npm/l/sercomm-rv6699.svg)](https://www.npmjs.com/package/sercomm-rv6699)
[![version](https://img.shields.io/npm/v/sercomm-rv6699.svg)](https://www.npmjs.com/package/sercomm-rv6699)
[![codecov](https://codecov.io/gh/timmson/sercomm-rv6699/branch/master/graph/badge.svg)](https://codecov.io/gh/timmson/sercomm-rv6699)
[![codacy](https://api.codacy.com/project/badge/Grade/71d7aeeb05e940028f7ac1766d6fff30)](https://www.codacy.com/app/timmson666/sercomm-rv6699)

## Installation

```bash
npm i sercomm-rv6699
```

## Examples

```js
const SerCommRv6699Api = require("sercomm-rv6699")

const options = {
    url: "http://your-router-ip",
    login: "login",
    password: "password"
};

let api = new SerCommRv6699Api(options)

api.getDeviceList().then((result) => console.log(result)).catch((error) => console.error(error))
```
