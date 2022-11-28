const theme = document.querySelector('.theme')
const dropDown = document.querySelector('.dropDown')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')
const body = document.querySelector('body')

theme.addEventListener('click',()=>{
    dropDown.classList.toggle('block')
})

dark.addEventListener('click',()=>{
    if(body.getAttribute('class')=="lightMode"){
        body.setAttribute('class','darkMode')
       removeBlock()
    }
})
light.addEventListener('click',()=>{
    if(body.getAttribute('class')=="darkMode"){
        body.setAttribute('class','lightMode')
      removeBlock()
    }
})

function removeBlock(){
    dropDown.classList.remove('block')
}

//password toggle and form validation

const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passShow = document.querySelector('.passShow')
const emailErr = document.querySelector('.emailErr')
const passErr = document.querySelector('.passErr')
const btn = document.querySelector('.btn')


passShow.addEventListener('click',()=>{
    if(password.getAttribute('type')==='password'){
        password.setAttribute('type','text')
        passShow.innerHTML = 'Hide'
    }else if(password.getAttribute('type')==='text'){
        password.setAttribute('type','password')
        passShow.innerHTML = 'Show'
    }
})

btn.addEventListener('click',(e)=>{
    e.preventDefault()
     if(email.value.length < 4 ){
        emailErr.innerHTML = 'Email lenght is too small'
    }
})
btn.addEventListener('click',(e)=>{
    e.preventDefault()
     if(password.value.length < 8 ){
        passErr.innerHTML = 'password lenght is too small'
    }
})
 