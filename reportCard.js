const students = [
    {
        name: 'Cosmos Abraham',
        scores:[
            {
                Mathematics: 30
            },
            {
                English: 50
            },
            {
                Biology: 80
            },
            {
                Chemistry: 70
            },
        ],
        age: 34,
        email: 'cosmosaba@gmail.com',
        id:'a12'
    },
    {
        name: 'Micheal Sandra',
        scores:[
            {
                Mathematics: 30
            },
            {
                English: 55
            },
            {
                Biology: 82
            },
            {
                Chemistry: 75
            },
        ],
        age: 32,
        email: 'micheal45@gmail.com',
        id:'b50'
    },
    {
        name: 'Linda Ikeji',
        scores:[
            {
                Mathematics: 70
            },
            {
                English: 50
            },
            {
                Biology: 90
            },
            {
                Chemistry: 75
            },
        ],
        age: 37,
        email: 'lindaikeji@gmail.com',
        id:'c89'
    },
    {
        name: 'Friday Rita',
        scores:[
            {
                Mathematics: 70
            },
            {
                English: 60
            },
            {
                Biology: 80
            },
            {
                Chemistry: 60
            },
        ],
        age: 47,
        email: 'fridayrita@gmail.com',
        id:'d56'
    },
]

const sName = document.querySelector('#sName')
const studentName = document.querySelector('.studentName')
const studentEmail = document.querySelector('.studentEmail')
const sNameErr = document.querySelector('.sNameErr')
const btn =  document.querySelector('.btn')

//scores
const maths = document.querySelector('.maths')
const eng = document.querySelector('.eng')
const chm = document.querySelector('.chm')
const bio = document.querySelector('.bio')

//total score
const tScore = document.querySelector('.tScore')



btn.addEventListener('click',(e)=>{
e.preventDefault()
    const data = students.filter((el)=>{
        return el.name === sName.value
    })
    
    if(data.length<1){
        sNameErr.innerHTML= "User Not Found"
     } 
studentName.innerHTML = data[0].name
studentEmail.innerHTML = data[0].email

 maths.innerHTML = data[0].scores[0].Mathematics
 eng.innerHTML = data[0].scores[1].English
 chm.innerHTML = data[0].scores[3].Chemistry
 bio.innerHTML = data[0].scores[2].Biology

 const m = data[0].scores[0].Mathematics
 const en = data[0].scores[1].English
 const c =  data[0].scores[3].Chemistry
const b = data[0].scores[2].Biology

const total = m+en+c+b
tScore.innerHTML = total


  console.log(data[0].scores)
  
})

