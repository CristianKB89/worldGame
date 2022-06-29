let title = document.querySelector('.input-title');
let description = document.querySelector('.input-description')
title.addEventListener('blur',(e)=>{
    let message = document.querySelector('.message')
    if(e.target.value == ''){
        message.innerHTML = 'no puede estar vacio'
    }else if(e.target.value.length < 5){
        message.innerHTML = 'El título debe tener al menos 5 caracteres'
    }else{
        message.innerHTML = ''
    }
})

description.addEventListener('blur',(e)=>{
    let message = document.querySelector('.message')
    if(e.target.value == ''){
        message.innerHTML = 'no puede estar vacio'
    }else if(e.target.value.length < 20){
        message.innerHTML = 'La descripción debe tener al menos 20 caracteres'
    }else{
        message.innerHTML = ''
    }
})