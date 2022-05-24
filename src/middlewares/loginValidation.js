const {body} = require('express-validator');

const loginValidations = [
   body('email')
        .notEmpty().withMessage('Es necesario que escribas un email').bail()
        .isEmail().withMessage('Debes poner una dirección de correo válida'),
    body('password').notEmpty().withMessage('Es necesario que escribas una contraseña')
]

module.exports = loginValidations;