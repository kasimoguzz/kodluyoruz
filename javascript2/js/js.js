
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
    liDOM.innerHTML = `<p id="check-text"> ${userDOM}</p>
    <i class="fa-solid fa-xmark" id="btn-icon"></i>
    `
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center','bg-light')
    UserListDOM.append(liDOM)


}

const iconDOM = document.querySelector('#btn-icon')

UserListDOM.addEventListener("click",check)


function  check()
{
const checkDOM = document.querySelector('#check-text')
   
   if(checkDOM.classList!="complate"){
    checkDOM.classList.add('complate')
   }
    else{
        checkDOM.classList.remove('complate')

    }
   
}
