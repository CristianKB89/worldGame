addEventListener('load', () => {
    const editButton = document.querySelectorAll('.editButton')
    const postEdit = document.querySelectorAll('.postEdit')
    
    editButton.forEach((button, i) => {
        button.addEventListener('click', () =>{
            postEdit[i].classList.toggle('editOn')
        })
    })
})