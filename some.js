 
        //some returns true if any of the elements meets the condition required in the function , else it returns false
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
   const anyA = students.some((el)=>{
        return el.score >=70
    })

    console.log(anyA)


        
   