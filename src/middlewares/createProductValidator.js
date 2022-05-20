const {body} = require('express-validator');


const productValidation = [
    body('title').notEmpty().withMessage('Inserte un título'),
    body('description').notEmpty().withMessage('Inserte una descripción'),
    body('price').notEmpty().withMessage('Inserte un precio'),
    body('discount').notEmpty().withMessage('Inserte un descuento'),
    body('genre').notEmpty().withMessage('Inserte un género')
]

module.exports = productValidation;