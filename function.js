 
        // function display(){
        //     console.log(12)
        // }

        // //ludo game

        // function ludoDie(){
        //    let dieOne =  (Math.floor(Math.random()*6)+1)
        //   let dieTwo =  (Math.floor(Math.random()*6)+1)
        //   console.log([dieOne,dieTwo])
        //   if(dieOne===6 && dieTwo ===6){
        //     alert('You can play again')
        //   }
        // }
        // ludoDie() // running a function
//introduction to arguements and parameters
//arguements are siply variables that can be used inside a function: but they are awaiting to be assigned


// function add(x,y){
// console.log(x+y)
// }


// function square(x){
// console.log(Math.pow(x,2))
// }


//write a function that can calculate the area of a circle
//pie*r*r

// function areaCircle(r){
//     let area = Math.floor(Math.PI*Math.pow(r,2))
//     console.log(area)
// }

//write a function that can calculate the perimeter of a rectangle
//2(l+b)
// function recArea(l,b){
//     let area = 2*(l+b)
//     console.log(area)
// }
 

//we can also pick the arguements from an external variable
// let username = prompt('your username')

// function salute(){
//     alert(`Hello ${username}`)
// }
//we can also use external variables along parameters
//create a system that can generate a unique ID for each user using his username and department initial
// let username = prompt('your username')
// let allStsudentsID = []

// function uniqueID(dept){
//     if(username.trim().length>=3){
//         let userInit = username.trim().slice(0,3).toUpperCase()
//    let userID = `${userInit}${Math.floor(Math.random()*2345)+2000}${dept}`
//         allStsudentsID.push(userID)
//    alert(`your unique ID for the Exam is ${userID}`)
    
//     }else{
//         alert('username must have more than 3 characters')
//     }
// }
//using functions with return
// function add(x,y){
//     return(x+y)
// }

// const sum =add(2,2)
// console.log(sum)

// if(sum<4){
// alert('wrong input')
// }


//functions as arguements

const display = function (func){
 func()
 func()
  
}

const rollDie = function(){
    console.log(Math.floor(Math.random()*6)+1)
}

display(rollDie)
//functions as objects
const math = {
    add: function (x,y){
        return x+y
    },
    multiply: function(x,y){
        return x*y
    },
    square: function (x){
        return Math.pow(x,2)
    }
}

// using 'this' inside a function

const user = {
    firstName : 'Michel',
    lastName: 'Adebayor',
    age: 25,
    career: 'Footballer',
    profile : function(){
        let userProfile = (`My name is ${this.firstName} ${this.lastName} i am a ${this.career}, and i am ${this.age}years. Thanks`)
        return userProfile
    }
}

 

 






















 












  