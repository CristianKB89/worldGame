let nick = document.querySelector('.input-nick');
let user = document.querySelector('.input-user');
let email = document.querySelector('.input-email');
let password = document.querySelector('.input-password');
let image = document.querySelector('.input-image')
user.addEventListener('blur',(e)=>{
    let mensaje = document.querySelector('.message')
    if(e.target.value == ''){
        mensaje.innerHTML = "Ningun campo puede estar vacio"
    }else if(e.target.value.length < 2){
        mensaje.innerHTML = "El usuario debe tener al menos dos caracteres"
    }
    else{
        mensaje.innerHTML = ""
    }
})
nick.addEventListener('blur',(e)=>{
    let mensaje = document.querySelector('.message')
        if(e.target.value == ''){
            mensaje.innerHTML = "Ningun campo puede estar vacio"
        }else{
            mensaje.innerHTML = ""
        }
})
email.addEventListener('blur',(e)=>{
    let mensaje = document.querySelector('.message')
    if(e.target.value == ''){
        mensaje.innerHTML = "Ningun campo puede estar vacio"
        console.log(arrayTarget)
    }else if(!e.target.value.includes('@') || !e.target.value.includes('.com')){
        mensaje.innerHTML = "Inserte un correo válido"
    }else{
        mensaje.innerHTML = ""
    }
})
password.addEventListener('blur',(e)=>{
    let mensaje = document.querySelector('.message')
    if(e.target.value == ''){
        mensaje.innerHTML = "Ningun campo puede estar vacio"
    }else if(e.target.value.length < 8){
        mensaje.innerHTML = "La contraseña debe tener al menos ocho caracteres"
    }else{
        mensaje.innerHTML = ""
    }
})
image.addEventListener('blur',(e)=>{
    let mensaje = document.querySelector('.message')
    if(e.target.accept !== 'image/*'){
        mensaje.innerHTML = "Inserte un formato válido"
    }
})