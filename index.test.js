const micro = require('micro')
const crud = require('./index')

const routes = crud('products', 'https://jsonbin.org/tylersnyder/ecommerce/payments', {
  authorization: `token 1ed6a0f2-6a17-45de-b1dd-5944f09e272b`
})

const server = micro(routes)

server.listen(3000)
console.log('Ready! Listening on port 3000')