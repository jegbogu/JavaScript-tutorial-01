 
//this will print 0-10
        // for(let i = 0; i<=10;i++){
        //     console.log(i)
        // }

// print 2-100 2,4,6....100
// for(let i = 2; i<=100;i+=2){
//     console.log(i)
// }     

//create a 2 times multiplication table 2X1 = 2 ,.... 2X12 = 24
// for(let i = 1; i<=12; i++){
//     console.log(`2 X ${i}= ${2*i}`)
// }

//printing in a descending order
//100, 90,80.....0
// for(let i=100; i>=0;i-=10){
//     console.log(i)
// }


// printing time table of any number
// let num = Number(prompt('enter number'))


// for(let i = 1; i<=50;i++){
//     console.log(`${num} X ${i} = ${num*i}`)
// }


////// looping over array

// let students = ['olivia','fred','nancy','wilson','biola']

// for(i=0;i< students.length;i++){
//     console.log(students[i])
// }
// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     console.log(element)
    
// }
//looping over a nested array
// const classes = [
//     ['vivian','Cosmos'],
//     ['Ronaldo','Naanby','Selah'],
//     ['Micheal','Mumbarak','Henry'],
//     ['Tiago','Nunez','Selah'],
//     ['Tiago','Suarez','Niaobi']
// ]

// for (let i = 0; i < classes.length; i++) {
//     const element = classes[i];
//     console.log(`#Class: ${i+1}`)
//      for (let j = 0; j < element.length; j++) {
//         const elementTwo = element[j];
//         console.log(elementTwo)
        
//      }
// }

// looping through an array using the for of

// let students = ['olivia','fred','nancy','wilson','biola']
// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     console.log(element)
    
// }
//  for (const student of students) {
//     console.log(student)
//  }

//for in loop ... it is for objects

// const nationality = {
//     country: 'Nigeria',
//     capital: 'Abuja',
//     states: 36,
//     isQualified: false,

// }
// console.log(nationality.country) //Nigeria
// console.log(nationality['country'])

//this is how to print the keys
// for(keys in nationality){
//     console.log(keys)
// }

//how to print values
// for(keys in nationality){
//     console.log(nationality[keys])
// }

//keys and values
// for(keys in nationality){
//     console.log(`${keys} : ${nationality[keys]}`)
// }

//while loop

// let i = 0 //initial decleration

// while(i<=10){
//     console.log(i++)
// }
 
//using while loop to keep users in a loop

//  let user = confirm('do you want to quite game? press ok')
 
//  while(user){
//     confirm('do you want to quite game? press ok')
//  }

 //using break in while loop
 //we use break when we are sure that the conditon should end the loop
//  let user = Number(prompt('how old are you'))

//  while(user<18){
//     let user = Number(prompt('how old are you'))
//      if(user>18){
//         break;
//      }
//  }

// const content = 'we have a food. i am trying to redirect it.'
// const res = content.replace('.',"\n")
// console.log(res)
(0+2)+(0+4)

let total = 0
const number = [2,4,5,1,3]
for (let index = 0; index < number.length; index++) {
    const element = number[index];
     total = total+element
    
    
}
console.log(total)

 