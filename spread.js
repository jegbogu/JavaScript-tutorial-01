 
        //spread helps us to isolate elements in an array, or characters in strings
    //     const student = 'Joseph'
    //    console.log(...student)
    //    console.log(student)
        //we can use spread to check for maximum value or minimun value in an array of numbers
// const total = [33,12,55,67,54]
//  console.log(...total)
//  console.log(total)

//  const maxValue = Math.max(...total)
//  console.log(maxValue)


//  const minValue = Math.min(...total)
//  console.log(minValue)

const students = [
            {
                name: 'Cosmos Abraham',
                score: 10,
                age: 8,
                email: 'cosmosaba@gmail.com',
                id:'a12'
            },
            {
                name: 'Micheal Sandra',
                score: 7,
                age: 32,
                email: 'micheal45@gmail.com',
                id:'b50'
            },
            {
                name: 'Linda Ikeji',
                score: 9,
                age: 37,
                email: 'lindaikeji@gmail.com',
                id:'c89'
            },
            {
                name: 'Friday Rita',
                score: 1,
                age: 47,
                email: 'fridayrita@gmail.com',
                id:'d56'
            },
        ]

const allStudent = Math.max(...students.map(el=>el.score))
 const display = students.filter(el=>el.score===allStudent)
console.log(display)















