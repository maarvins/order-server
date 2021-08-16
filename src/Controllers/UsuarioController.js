//SESSÃO DE CONTROLE
//GERENCIAMENTO DA MANEIRA DE INTERAGIR COM USUÁRIO - CONTROLE LÓGICO DA APLICAÇÃO - DIZ AO USUÁRIO QUAL RESPOSTA TERÁ APÓS UMA REQUISIÇÃO
//METODOS PADRÕES PARA CADA TIPO DE VERBO DO HTTP
// C-CREAT(POST)
// R-READ(GET)
// U-UPDATE(PUT)
// D-DELETE(DELETE)

exports.get = (req, res, next) => {
  res.status(200).send("Rota GET!")
}

// exports.post = (req, res, next) => {
  //   res.status(201).send("Rota POST!")
// }

// STATUS DE REQUISIÇÃO (200,201) - SUCESSO E SUCESSO SEM RETORNO DE OBJETO

// exports.put = (req, res, next) => {
//   let id = req.params.id
//   res.status(201).send(`Rota PUT com ID! --> ${id}`)
// }

// exports.delete = (req, res, next) => {
//   let id = req.params.id
//   res.status(200).send(`Rota DELETE com ID! --> ${id}`)
// }


// exports.getById = (req, res, next) => {
//   let id = req.params.id
//   res.status(200).send(`Rota GET com ID! ${id}`)
// }
