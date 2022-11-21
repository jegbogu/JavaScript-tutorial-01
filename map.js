 // Map Creates a new array for the call back function
        //note that all other call function uses return except forEach call bacl function.
        //

        // const numbers = [1,4,5,22,3,45]

        // i want to store in an array all even numbers in the array called numbers

    // const newNum =  numbers.map((el)=>{
    //         if(el%2===0){
    //             return el
    //         }
    //     })

        //this returns boolen in an array
        // const fewNum = numbers.map(el=>el%2===0)
        // console.log(newNum)
        // console.log(fewNum)


        const students = [
            {
                name: 'Cosmos Abraham',
                score: 50,
                age: 34
            },
            {
                name: 'Micheal Sandra',
                score: 70,
                age: 32
            },
            {
                name: 'Linda Ikeji',
                score: 81,
                age: 37
            },
        ]

const aStudents = students.map((el)=>{
   if(el.score>=70){
    return el
   }
})

console.log(aStudents)



  