 
        //functions are scoped 

        //function gives preference to variables that are in its block {} compared to external variables
let username = 'Dennis'

function display(){
    let username = 'Friday'   

return  username.toUpperCase()
}
display() // FRIDAY

//variables used in a function CANNOT be reused in another function

 

// function ageData(){
//     let age = 45
//     return age+10
// }

// function ageDP(){
//     return age+100
// }

// ageDP() // uncaught error, age is not defined , because age is used without it scope, it is used in another function
// ageData() //55.. because age is defined within it scope

///LEXICAL SCOPE

//we can use a function variable inside a function that is the function where the variable is found
// function forexDisplay(){
//     let price = 500
//             return price*2
//     }

// function forex(){
   
//    return forexDisplay()
   
    
    
// }

//lexical with parameters
function forexDisplay(data){
    let price = 500
            return price*data
    }

function forex(data){
   
   return forexDisplay(data)
   
    
    
}






















  