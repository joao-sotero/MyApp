const usuarioController= {
    index: (req, res)=> {
       return res.send('estou exibindo essa mensagem atravez do controller');
    }
}

module.exports = usuarioController;