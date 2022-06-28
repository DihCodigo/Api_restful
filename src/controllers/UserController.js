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
    },

    async list(req, res) {
        const response = {...responseModel}

        const [rowsReturned] = await connection.query(`
            SELECT * FROM usuario;
        `)

        if(rowsReturned) {
            response.success = true
            response.data = rowsReturned;
        }
        
        return res.json(response)
    },

    async findById(req, res) {
        const response = {...responseModel}
        const idUser = req.params.id

        console.log(idUser)

        const [rowsReturned] = await connection.query(`
            SELECT * FROM usuario WHERE id = ${idUser}`)

        if(rowsReturned) {
            response.success = true
            response.data = rowsReturned;
        }
        
        return res.json(response)
    },

    async delete(req, res) {
        const response = {...responseModel}
        const idUser = req.params.id

        console.log(idUser)

        const [rowsReturned] = await connection.query(`
            DELETE FROM usuario WHERE id = ${idUser}`)

        if(rowsReturned) {
            response.success = true
            response.data = rowsReturned;
        }
        
        return res.json(response)
    }
}
