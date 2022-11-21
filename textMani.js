const text = document.querySelector('.text')
console.log(text)
//to pick out the content in an element we use any of the three methods
//1. innerHTML
//2. textContent
//3. innerText

//innerHTML

console.log(text.innerHTML)

//textContent
console.log(text.textContent)

//innerText
console.log(text.innerText)

//how to add styles with javascript 

const h1 = document.querySelector('h1')

h1.style.backgroundColor = 'red'
h1.style.color = 'white'
h1.style.padding = '10px'
h1.style.textAlign = 'center'