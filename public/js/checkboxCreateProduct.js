window.addEventListener('load', () =>{
    let form = document.querySelector('.signup-form');
    let checkboxValues = [];

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let checkboxes = document.getElementsByName('platform');
        for(let i = 0; i < checkboxes; i++){
            if(checkboxes[i].checked == true){
                checkboxValues.push(checkboxes[i].value)
            }
        }
    console.log(checkboxes);

    })
    console.log(checkboxValues);
})