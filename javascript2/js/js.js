
let userFormDOM = document.querySelector('#UserForm')

userFormDOM.addEventListener('submit',formHandeler)


function formHandeler (event)
{
    event.preventDefault()
    let userDOM = document.querySelector('#UserText')
    if (userDOM.value)
    {
        addItem(userDOM.value)
        userDOM.value = ""
    }
    else{
        
    }
    
}

let UserListDOM = document.querySelector('#UserList')

const addItem = (userDOM) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = ` ${userDOM} `
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center','bg-light')
    UserListDOM.append(liDOM)


}


