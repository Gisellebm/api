const { request, response } = require('express')
const express = require('express')
const app = express()

app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params

    response.send(`
        Mensagem ID: ${id}.
        Nome do usuário: ${user}
    `)
})

app.get("/users", (request, response) => {
    const { page, limit } = request.query

    response.send(`Página: ${page}. Mostrar: ${limit}`)
})

const port = 3333
app.listen(port, () => console.log(`Server is running on port ${port}`))