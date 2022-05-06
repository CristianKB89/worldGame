const {body} = require('express-validator');

const signupValidations = [
    body('userName').notEmpty().withMessage('Es necesario que escribas tu nombre completo'),
    body('userNickname').notEmpty().withMessage('Escribe como te gustaría que te llamaran!'),
    body('userEmail')
        .notEmpty().withMessage('Es necesario que escribas un email').bail()
        .isEmail().withMessage('Debes poner una dirección de coreo válida'),
    body('userPassword').notEmpty().withMessage('Es necesario que escribas una contraseña')
]

module.exports = signupValidations;