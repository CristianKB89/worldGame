let email = document.querySelector('.input-email');
let password = document.querySelector('.input-password');

email.addEventListener('blur',(e)=>{
    let mensaje = document.querySelector('.message')
    if(e.target.value == ''){
        mensaje.innerHTML = "Ningun campo puede estar vacio"
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
    }else{
        mensaje.innerHTML = ""
    }
})