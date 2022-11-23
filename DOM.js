//DOM stands for document Object Model. It is your Javascript window into your webpage
//the HTML is called document. the HTML file is a document file
//what we interact with in HTML is called elements
//this is select the element(s) with the tag name p
//the textP is an array of all the p elements in the document
const textP = document.getElementsByTagName('p')

//how to select an element with a classname
const contain = document.getElementsByClassName('container')

//how to select an element with an id
const oText = document.getElementById('text')

//we can select a lot tags and store them in one variable

const group = document.getElementsByTagNameNS('p','div')

//QUERRYSELECTOR

//how select a class element using querryselector. because it a class we use . with the class name
const nav = document.querySelector('.nav')
console.log(nav)
//how select a tag element using querryselector. because it a tag we use the tag name only
const img = document.querySelector('img')
console.log(img)

//how select a tag element using querryselector. because it an id we use the  # with the tag name 
const pText = document.querySelector('#text')
console.log(pText)
// query seector all
// stores all elements with that tag to the array
const p = document.querySelectorAll('p')
console.log(p)


