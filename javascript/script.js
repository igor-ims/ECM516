// const nomes = [`Antonio`, 'Ana', 'Rodrigo']

// /*
// let nomesA = []
// nomes.forEach(nome => {
//     if(nome[0].toUpperCase() === 'A'){
//         nomesA.push(nome)
//     }
// });
// console.log(nomesA)
// */

// const resultante = nomes.filter(nome => nome.startsWith('a') || nome.startsWith('A'))
// console.log(resultante)

// // produza um novo vetor a partir de nomes que contenha as iniciais de cada nome

// /*
// let iniciaisImperativo = []

// for(let i = 0; i < nomes.length; i++){
//     iniciaisImperativo.push(nomes[i][0])
// }

// console.log(iniciaisImperativo)
// */

// const iniciais = nomes.map(nome => nome[0])
// console.log(iniciais)

// // verifica se todos começam com A

// const todosComecamComA = nomes.every(nome => nome[0] === 'A')
// console.log(todosComecamComA)

// // verifica se pelo menos um começa com A

// const peloMenosUmComecaComA = nomes.some(nome => nome[0] === 'A')
// console.log(peloMenosUmComecaComA)

// const valores = [1, 2, 3, 4, 5]

// const soma = valores.reduce((acumulador, valor) => acumulador + valor, 0)
// console.log(soma)

// function f(funcao){
//     return funcao()
// }
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada pela g')
//         function exibe1(){return 1}
//         return exibe1
//     }
//     return outraFuncao
// }

// // exibir o numero 1
// console.log(f(g()()))

// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco:{
//         logradouo: 'Rua B',
//         numero: 121,
//         bairro: 'J'
//     }
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

// const concessionaria = {
//     cnpj: '123.456.789/0001',
//     endereco: {
//         logradouro: 'Av Brasil',
//         cidade: 'Rio de Janeiro',
//         cep: '12345-123',
//         numero: 3
//     },
//     carros: [
//         {marca: 'M1', modelo: 'A1', ano: 2000},
//         {marca: 'M2', modelo: 'A2', ano: 2020},
//         {marca: 'M3', modelo: 'A3', ano: 2010},
//         {marca: 'M4', modelo: 'A4', ano: 2005},
//         {marca: 'M5', modelo: 'A5', ano: 2015},
//     ]
// }

// console.log(concessionaria.carros[0].marca)

// for(let carro of concessionaria.carros){
//     console.log(carro)
// }

// const calculadora = {
//     soma: function(a, b) {return a + b},
//     subtracao: (a, b) => a - b,
// }

// console.log(calculadora.soma(1, 2))
// console.log(calculadora.subtracao(1, 2))

// processamento sincrono e assincrono

// sincrono:
// const oi = () => console.log('oi')
// console.log('inicio')
// oi()
// console.log('fim')

// assincrono:
// const fs = require('fs')

// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Erro: ${erro}`)
//         }
//         else{
//             console.log(`Funcionou: ${conteudo.toString()}`)
//             const dobro = Number(conteudo) * 2
//             console.log(`Dobro: ${dobro}`)

//             const finalizar = (erro) => {
//                 if(erro){
//                     console.log(`Erro de escrita: ${erro}`)
//                 }
//                 else{
//                     console.log('Escrita concluida, arquivo finalizado')
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//         // assincrona
//     } // callback
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('fim da funcao abrirArquivo')
// }
// abrirArquivo('arquivo.txt')

// function somaDemorada(n) {
//   const promise = new Promise((resolve, reject) => {
//       let acumulador = 0;
//       for (let i = 0; i < n; i++) {
//         acumulador += i;
//       }

//       resolve(acumulador);
//   })
//   return promise
// }

// const resultado = somaDemorada(1000000000)
// resultado.then((res) => 
//     console.log(`Funcionou: ${res}`)
// )
// .catch(function(err){
//     console.log(`Erro: ${err}`)
// })
// console.log('Continuo executando')

const somaRapida = (n) => {
    // return new Promise((resolve, reject) => {
    //     resolve(n / 2 * (n + 1))
    // })
    return n >= 0 ? Promise.resolve(n / 2 * (n + 1)) : Promise.reject('Apenas positivos, por favor')
}

const resultado = somaRapida(-1000000000)
resultado.then((res) => 
    console.log(`Funcionou: ${res}`)
)
.catch(function(err){
    console.log(`Erro: ${err}`)
})