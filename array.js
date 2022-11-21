  // let cars = ['volvo','benz','ford','toyota']
        // console.log(cars)
        //Arrays are indexed: this means that the index of the first car is 0, the second one is 1, on and on like that
        //how to the get the index
    //   console.log(cars.indexOf('volvo'))
    //   cars[0] //volvo
    //   cars[1] //benz
    //   cars[2] //ford
    //   cars[3] //toyota

      //how to push , pop, shift and unshhift in array

      //push helps us to add to the last part of the array
// let cars = ['volvo','benz','ford','toyota']

// cars.push('tesla','honda','audi')
// console.log(cars)
// console.log(cars.length)
//pop removes from the last positon of the array
//  cars.pop()
//  cars.pop()

 //shift and unshift .... is the opposite of push and pop

//  cars.unshift('kia') // this adds to the beginning of the array


 //array.includes() // helps us to search

 // we can use concant to join arrays together
//  const newCars = ['BMW','Jaquar','Royce']
//   cars.concat(newCars)

//   newCars.concat(cars)

  //empty array

//   const students = []
//   const newStudents = ['Abigal', 'Cosmos', 'Samuel']
//   students.push(newStudents)
  //Modifying array
//if i want to replace Abigal with Amaka
//  newStudents[0] = 'Amaka'
// newStudents[1] = 'Emeka'
  
  //slice , splice
// const computerBrands = ['Lenovo','HP', 'Dell' , 'Toshiba','Asus']

  //multi- array 
// const students = [
//     ['Richard', 'Emmanuel', 'Goodluck','Miracle'],
//     [null,'Favour','Chris','Huson','Okoli'],
//     ['Akin','Dennis','Faith',null, null]
// ]
//Todo App
let firstTodo = prompt('first todo')
let secondTodo = prompt('second todo')
let thirdTodo = prompt('third todo')
const todo = []
todo.push(firstTodo,secondTodo,thirdTodo)
console.log(todo)




 