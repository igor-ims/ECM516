const express = require("express")
const app = express()
app.use(express.json())
const PORT = 6000

const baseConsolidada = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsolidada[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsolidada[observacao.lembreteId]['observacoes'] || []
        observacoes.push(observacao)
        baseConsolidada[observacao.lembreteId]['observacoes'] = observacoes
    },
}

app.get("/lembretes", (req, res) => {
    res.json(baseConsolidada)
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    funcoes[evento.tipo](evento.dados)
    res.end()
})

app.listen(PORT, () => {
    console.log(`\x1b[36mConsulta: Servidor rodando na porta ${PORT}\x1b[0m`)
})