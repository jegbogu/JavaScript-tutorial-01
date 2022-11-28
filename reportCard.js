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

const sName = document.querySelector('#sName')
const studentName = document.querySelector('.studentName')
const studentEmail = document.querySelector('.studentEmail')
const btn =  document.querySelector('.btn')


btn.addEventListener('click',(e)=>{
e.preventDefault()
    const data = students.filter((el)=>{
        return el.name === sName.value
    })
    
    console.log(data)
studentName.innerHTML = data[0].name
studentEmail.innerHTML = data[0].email
})

