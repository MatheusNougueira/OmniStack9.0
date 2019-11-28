const User = require("../models/User");

module.exports = {

    //async - indicando função assíncrona
    //await - só irá prosseguir para a próxima linha quando a função finalizar, cadastrar no banco
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        //validando se existe o email informado, caso não exita, cria um usuário novo
        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};