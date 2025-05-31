const express = require('express')
const app = express()
app.use(express.json()) // Middleware para converter o body em JSON

const PORT = 5000

app.get('/hey-docker', (req, res) => {
    res.json({
        message: 'Hey, Docker!'
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})