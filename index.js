const { send, createError } = require('micro')
const fetch = require('node-fetch')

module.exports = exports = function crud(resource, url, headers) {
  return async(req, res) => {
    res.setHeader('Access-Control-Request-Method', ['GET, POST, PUT, PATCH, DELETE'])
    const { method = '' } = req

    switch (method) {
      case 'GET':
      case 'DELETE':
        try {
          const payload = await fetch(url, {
            method,
            headers
          })

          const data = await payload.json()

          return send(res, 200, {
            status: 'success',
            [resource]: data
          })
        } catch(err) {
          const { statusCode = 500, message } = err
          
          return send(res, statusCode, {
            status: 'error',
            message
          })
        }

      case 'POST':
      case 'PUT':
      case 'PATCH':
        try {
          const body = await json(req)
          const payload = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(body)
          })

          const data = await payload.json()

          return send(res, 200, {
            status: 'success',
            [resource]: data
          })
        } catch(err) {
          const { statusCode = 500, message } = err
          
          return send(res, statusCode, {
            status: 'error',
            message
          })
        }

      default:
        return send(res, 405, {
          status: 'error',
          message: 'method not allowed'
        })
    }
  }
}