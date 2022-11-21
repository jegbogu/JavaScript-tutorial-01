 
        //filter creates an array for all elements that passes the test created by the function

        const students = [
            {
                name: 'Cosmos Abraham',
                score: 30,
                age: 34,
                email: 'cosmosaba@gmail.com',
                id:'a12'
            },
            {
                name: 'Micheal Sandra',
                score: 70,
                age: 32,
                email: 'micheal45@gmail.com',
                id:'b50'
            },
            {
                name: 'Linda Ikeji',
                score: 81,
                age: 37,
                email: 'lindaikeji@gmail.com',
                id:'c89'
            },
            {
                name: 'Friday Rita',
                score: 31,
                age: 47,
                email: 'fridayrita@gmail.com',
                id:'d56'
            },
        ]

const userEmail = prompt('enter email')

 const  result = students.filter((el)=>{
    return el.email === userEmail
 })

 if(result.length<1){
    console.log('not found')
 }else{
    console.log(result)
 }


    
//  const age = Number(prompt('enter age'))
//  const score = Number(prompt('enter score'))

 
// const passStudents = students.filter((el)=>{
//     return ( el.age < 40 && el.score>50 )
// })

// console.log(passStudents)

  