 
        const Uche = {
            name: 'Uche',
            age: 34,
            isMarried: true,
            occupation:'Developer',
            family:'Ezinne',
            religion: 'Christainity'
        }

        const meetup = []
        
         for( const key in Uche){
            
            const meetups = {
                id:key,
                ...Uche[key]
            }
            meetup.push(meetups)
         }
        
















         
        //modifying object
        Uche.age = 30
        //adding to the objects
        Uche.State = 'Abia'



        //using array as variable in object
        // const cars = ['Volvo', 'Benz','Honda']

        // const AllCars = {
        //     best:'Tesla',
        //     others: cars
        // }


        //objects in array

            const students = [
                {
                    name: "Richard",
                    isMarried: true,
                    spouse: "Queeneth",
                    children : ['Henry','Miracle', 'Martha'],
                    age: 34,
                    occupation : "Developer"
                },
                {
                    name: "Faith",
                    isMarried: true,
                    spouse: "Mark",
                    children : ['Mary','Ada', 'Friday'],
                    age: 24,
                    occupation : "Developer"
                },
                {
                    name: "Goodluck",
                    isMarried: false,
                    spouse: null,
                    children : null,
                    age: 22,
                    occupation : "Student"
                }
            ]
            for (let index = 0; index < students.length; index++) {
                const element = (`Name: ${students[index].name} || Age:${students[index].age} || Occupation:${students[index].occupation}`)
                console.log(element)
                
            }
            
            const clan = [
                {
                    name: "Richard",
                    isMarried: true,
                    spouse: "Queeneth",
                    children : ['Henry','Miracle', 'Martha'],
                    age: 34,
                    occupation : "Developer"
                },
                {
                    name: "Faith",
                    isMarried: true,
                    spouse: "Mark",
                    children : ['Mary','Ada', 'Friday'],
                    age: 24,
                    occupation : "Developer"
                },
                {
                    name: "Goodluck",
                    isMarried: false,
                    spouse: 'favour',
                    children : ['Sandra','Tim', 'Hansly'],
                    age: 22,
                    occupation : "Student"
                }
            ]

            for (let i = 0; i < clan.length; i++) {
                const element = clan[i].children;
                console.log(`${i+1}. ${clan[i].name} Children`)
                for (let j = 0; j < element.length; j++) {
                    const elementTwo = element[j];
                    console.log(elementTwo)
                    
                }
                
            }
   