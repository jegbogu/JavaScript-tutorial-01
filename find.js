 
        // we use find call back function when we want to return the first element that meets the criteria. This is used for implementing search with use of IDs or email or unique registerations numbers

        const students = [
            {
                name: 'Cosmos Abraham',
                score: 50,
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
        ]
const userName = prompt('User Name')
 

const display = (userName)=>{
    if(userName ){
        return userName
    } 
}

const user = students.find((el)=>{
   return el.name ===  display(userName)
})

   
 