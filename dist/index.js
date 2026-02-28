import express from 'express'
export const app = express()
const domainName = 'localhost'
const PORT = 3000
app.use(express.json())
app.get('/', async (_req, res) => {
  res.status(200).send('Welcom to HTTP server')
})
app.listen(PORT, () => {
  console.log(
    `Serveur tournant sur le port ${PORT}\nSe rendre sur http://${domainName}:${PORT}`,
  )
})
//# sourceMappingURL=index.js.map
