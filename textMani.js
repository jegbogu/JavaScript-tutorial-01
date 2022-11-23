// const text = document.querySelector('.text')
// console.log(text)
//to pick out the content in an element we use any of the three methods
//1. innerHTML
//2. textContent
//3. innerText

//innerHTML

// console.log(text.innerHTML)

//textContent
// console.log(text.textContent)

//innerText
// console.log(text.innerText)

//how to add styles with javascript 

// const h1 = document.querySelector('h1')

// h1.style.backgroundColor = 'red'
// h1.style.color = 'white'
// h1.style.padding = '10px'
// h1.style.textAlign = 'center'

//ATTRIBUTES

// const passInput = document.querySelector('#passInput')
// const imgOne = document.querySelector('.imgOne')

// console.log(imgOne.getAttribute('src'))

// console.log(passInput.getAttribute('type'))

// //LOOPING in DOM
// const img = document.querySelectorAll('img')
 
// for (const images of img) {
//     console.log(images.getAttribute('src'))
// }

//setAttribute
//this helps us change the attribute of an element, this is the idea behind password toggle
//  passInput.setAttribute("type","password")

//  for (const images of img) {
//     images.setAttribute('src','https://media.istockphoto.com/id/1350900187/photo/it-teacher-writing-on-the-whiteboard-in-the-classroom.jpg?b=1&s=170667a&w=0&k=20&c=IW0kINJNQ3pGEBUhO91adseJQTmQO_LGyk9nMV8zsro=')
// }

//classList 
//In classList we have four methods
//classList.add, classList.remove,//classList.contain, classList.replace, classList.toggle
//classList.add
//classList.add can help us add class(es) to an element. Most especially , css Class
// const h1 = document.querySelector('h1')
// h1.classList.add('lor')

//classList.remove removes a class from an element , especially css
// h1.classList.remove('lor')

//classList.replace can help us replace class in an element 
// h1.classList.replace('lor','bor')

//classList.toggle helps us to toggle between two classess especially in CSS
//when using toggle the HTML element must have an initail class, then you create a function that can toggle between that initail class and the other class
// const body = document.querySelector('body')

// const toggleMode = ()=>{
// body.classList.toggle("darkMode")
// console.log(body.classList.contains("darkMode"))
 
// }
//classList.contain, classList.contain helps us to check if an element contains a particular class, if the element contins that class, it returns true, but if does not contain that class it retuns false

////////////////////////////////////
//HOW TO CREATE HTML ELEMENTS AND APPEND IT IN JS
//chose where you want to append the element, we want to add the elements we are creating to body, so we selected the body
// const body = document.querySelector('body')

//create the element
// const img = document.createElement('img')
// const h3 = document.createElement('h3')

// //add the contents of the element
// img.src = "https://media.istockphoto.com/id/1355638834/photo/close-up-portrait-of-software-engineer-working-on-computer-line-of-code-reflecting-in-glasses.jpg?b=1&s=170667a&w=0&k=20&c=02M9iMSk2b3mzfUfNsjytVBytMViDh5q9lgpak8K3lQ="

// h3.innerHTML = "hello this ia a new text"

// console.log(img)
// console.log(h3)

//append(add) the created elements to the body or to a div you have selected
// body.append(img)
// body.append(h3)

//REMOVE CHILD
//we can use the removeChild method to remove an element from a selected tag, such as a div, or body
// body.removeChild(img)

//how to insert element to a specific point in javascript using innersAdjacentElement Method

//step one. select the element where you want to append the created element 
const section = document.querySelector('.section')

//step two. Create the element
const a = document.createElement('a')

//step three .. add the content of the created element
a.innerHTML = 'This a new link'
a.href = 'google.com'
 
  

//where we want to append the element
 
// section.insertAdjacentElement('afterbegin',a)
// section.insertAdjacentElement('afterend',a)
// section.insertAdjacentElement('beforebegin',a)
section.insertAdjacentElement('beforeend',a)

