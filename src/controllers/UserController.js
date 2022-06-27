const connection = require('../database/connection')
const { createToken } = require('../modules/jwt')

const responseModel = {
    success: false,
    data: [],
    error: []
}

module.exports = {

    async create(req, res) {
        const response = {...responseModel}

        const { nome, email, usuariologin, senha } = req.body;

        const [id, affectedRows] = await connection.query(`
            INSERT INTO usuario VALUES (
                DEFAULT,
                '${nome}',
                '${email}',
                '${usuariologin}',
                '${senha}',
                NOW(),
                NOW()
            );
        `)

        if(affectedRows > 0) {
            response.success = true
            response.data = "requisição realizada com sucesso!";
        }

        

        return res.json(response)
    }
}
