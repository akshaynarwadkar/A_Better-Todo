
const form = document.querySelector('form.add')
const ul = document.querySelector('.list-group')

// console.log(form)
// console.log(ul)

form.addEventListener('submit', e =>{
    e.preventDefault()
    const todo = form.add.value.trim()

    if(todo.length)
    {

        const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`

        ul.innerHTML += html
        
    }   

    form.reset() //we reset the form not just the value 


})

ul.addEventListener('click',e => {
    if(e.target.nodeName === 'I'){
        
        e.target.parentElement.remove()
        
        
    }
})