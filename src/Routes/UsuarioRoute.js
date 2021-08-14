//LOCAL ROTAS REFERENTES A USUARIO

const UsuarioController = require("../Controllers/UsuarioController")

module.exports = (app) => {
  app.get("/status", UsuarioController.get)
}
