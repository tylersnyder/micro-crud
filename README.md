# micro-crud

### Usage

Provide `crud` with a `resource` name, `endpoint`, and optional `headers`. Get back a ligthweight `micro` server with `GET, POST, PUT, PATCH, DELETE` support.

```
const crud = require('micro-crud')

module.exports = crud('users', 'https://website.com/api/users', {
  authorization: `token secretKey`
})
```

