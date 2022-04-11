const { Router } = require('express');

const router = Router();

const authenticateController = require('../controllers/authenticate');

router.post('/authenticate', authenticateController.create);

module.exports = router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
