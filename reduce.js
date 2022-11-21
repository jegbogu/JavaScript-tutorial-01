 
//     const number = [2,3,1,5,6]

//     let num = 0

//     for (let index = 0; index < number.length; index++) {
//          num = (num + number[index]);
//         }
//         console.log(num)


//   const numC =  number.reduce((acc,cv)=>{
//     return acc+cv
// })
// console.log(numC)

//we can use two or more  call back functons together

const Kunle = [
    {
    course: 'mathemathics',
    score: 70
     },
     {
    course: 'physics',
    score: 80
     },
     {
    course: 'chemistry',
    score: 75
     },
     {
    course: 'english',
    score: 60
     }
]

//how to use two callback functions to sum up Kunle scores

const result = Kunle.map(el=>el.score).reduce((acc,cv)=>acc+cv)
console.log(result)










 