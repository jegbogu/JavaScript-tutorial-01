// const btn = document.querySelector('.btn')
// const form = document.querySelector('form')

//e.preventDefault helps us to prevent the page from refreshing(prevent submit the form) when the button is clicked
// form.addEventListener('submit',(e)=>{
// e.preventDefault()
// alert('heeloo')
// console.log(e)
// })
// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     alert('heeloo')
//     console.log(e)
//     })

//How to pick the value of an input
// const btn = document.querySelector('.btn')
// const city = document.querySelector('#city')


// btn.addEventListener('click',(e)=>{
//    e.preventDefault()
//     console.log(city.value)
// })

//type and display project

// const output = document.querySelector('.output'),
// city = document.querySelector('#city');

// city.addEventListener('input',(e)=>{
//     output.innerHTML = city.value
   
// })

//character count project
const count = document.querySelector('.count')
const city = document.querySelector('#city');

city.addEventListener('input',(e)=>{
    
    if(e.inputType === 'insertText'){
        count.innerHTML++
        
    }else if(e.inputType === 'deleteContentBackward'){
        count.innerHTML--
    }else if(city.value==" "){
        count.innerHTML = 0
    }
})


