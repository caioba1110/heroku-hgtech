const express = require('express')
const app = express()

app.use(express.json())
conversas = {}

app.get('/', (req, res) => res.send('Hello world!'))

app.get('/conversa', (req, res) => res.send('Estou retornando uma conversa'))

/*
    FORMATO DA CONVERSA

    {
        "1": [
            {
                "cargo": "funcionario",
                "mensagem": "Olá, tudo bem?",
                "nome": "Douglas"
            },
            {
                "cargo": "cliente",
                "mensagem": "Tudo ótimo e contigo?",
                "nome": "Caio"
            },
            {
                "cargo": "funcionario",
                "mensagem": "Tudo ótimo, como posso ajudar?",
                "nome": "Douglas"
            },
            {
                "cargo": "cliente",
                "mensagem": "O software vendido pela empresa de vocês está instavel...",
                "nome": "Caio"
            }
        ]
    }
*/

/*
    Cria conversa

    O que deverá ser feito?
    Criar uma nova conversa e retornar seu id

    O que deverá ser enviado?
    Nada
*/
app.post('/conversa', (req, res) => {
    if (Object.keys(conversas).length > 0) {
        ponteiro = Object.keys(conversas).length - 1
        console.log(ponteiro)
        id_int = parseInt(Object.keys(conversas)[ponteiro]) + 1
        console.log(id_int)
        id = id_int.toString()
        console.log(id)

        conversas[id] = {}

        res.send(id)
    } else {
        conversas["1"] = []
        res.send("1")
    }
}
)

/*
    Encerra conversa

    O que deverá fazer?
    Encerrar uma conversa dado um id

    O que deverá ser enviado?
    O id
*/

/*
    Envia mensagem para o servidor

    O que deverá fazer?
    Colocar uma nova mensagem no final da conversa.

    O que deverá ser enviado?
    O id da conversa, um cargo, nome e mensagem
*/

/*
    Método de verificação de conversa

    O que deverá fazer?
    Ver se a conversa foi atualizada com o tamanho. Se for, retornar a conversa, se não, retornar false.

    O que deverá ser enviado?
    id da conversa e quantidade de mensagens na conversa.
*/

/* 
    Coleta os ids das conversas

    O que deverá fazer?
    Retornar os ids das conversas

    O que deverá ser enviado?
    Nada
*/

app.listen(process.env.PORT || 3000, () => console.log(`Em execução. Porta: ${2000}.`))