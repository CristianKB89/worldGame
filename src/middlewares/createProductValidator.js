const {body} = require('express-validator');


const productValidation = [
    body('title').notEmpty().withMessage('Inserte un título'),
    body('description').notEmpty().withMessage('Inserte una descripción'),
    body('price').notEmpty().withMessage('Inserte un precio'),
    body('discount').notEmpty().withMessage('Inserte un descuento'),
    body('genre').notEmpty().withMessage('Inserte un género'),
    body('platform').notEmpty().withMessage('Elija una plataforma'),
    body('imgCard').custom((value, {req}) => {
        let file = req.file;
        if(!file){
            throw new Error('Inserte una imagen para la tarjeta');
        }
    }),
    body('imgDetail').custom((value, {req}) => {
        let file = req.file;
        if(!file){
            throw new Error('Inserte una imagen para el detalle');
        }
    })

]

module.exports = productValidation;