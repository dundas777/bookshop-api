const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('bookshop-db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(process.env.PORT || 80, () => {
  console.log('JSON Server is running')
})