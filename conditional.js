//  let password = prompt('Password:')

//check if the password length is greater than 7

// if(password.length>7){
//     alert('password is good')
// }

//create a system that allows <18 => not permiited, >18 ==> welcome

// let age = Number(prompt('Age:')) //22

// if(age<18){
//     alert('Not Permitted')
// }else if(age>18){
//     alert('welcome')
// }

//create a system that checks for @ in an email address

// let gmail  = prompt('Email Address :')

// if(gmail.indexOf('@')===-1){
//     alert('@ is missing')
// }else{
//     alert(` Welcome ${gmail}`)
// }
//Logical AND, logical NOT and Logical OR
//AND =>&& , NOT => !, OR => ||

//Logic NOT 
//!= (not equalto this does not check the type but the value only)
//!== (strictly not equal to, it checks for type and value)
//!<= , !>=
//! can also be called a negation (it flips a truthy value to a falsy valvue and vice versa)
// let username = prompt('Enter name')

// if(!username){
//     alert('Username cant be empty')
// }else{
//     alert(`welcome ${username}`)
// }
//using the AND to check for username and password

//username must be greater than 6
//password must be greater than 8

// let username = prompt('Enter username') //5
// let password = prompt('Enter Password')//30

// if((username.length>6 && password.length>8)){
//     alert(`Hello ${username}`)
// }else{
   
//     alert('username or password is incorrect')
// }

//OR logic 
//logic that can take in those that have paid completly or greater than 60 years
// let age = Number(prompt('Age:'))
// let isPaid = prompt('have you paid completly?')

// if(age>60 || isPaid === 'true'){
//   let confirmData =  confirm('are you sure you would like to enter?')
//   if(confirmData==true){
//     alert('congratulation enter and win ')
//   }else{
//     alert('you can enter when you are ready')
//   }
// }else{
//     alert('you dont have accesss')
// }

let userUsername = prompt('Username')
let userPassword = prompt('Password')


const user = {
  username: "micheal henry",
  password: "#monkey123!"
}

if((userUsername.toLowerCase().trim() === user.username && userPassword.trim() === user.password)){
  alert(` Welcome ${userUsername}`)
}else{
  alert(`username or password is incorrect`)
}

