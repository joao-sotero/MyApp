const usuarios = require('../model/usuarios')

const usuarioController= {
    index: (req, res)=> {
       return res.send(usuarios.listarUsuarios());
    }
}

module.exports = usuarioController;