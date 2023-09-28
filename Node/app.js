// GET POST PUT DELETE methods understanding using POSTMAN
const express = require('express')
const app = express();
let {people} = require('./data')
// GET method
app.use(express.static('./methods-public'))
app.get('/api/people', (req, res)=>{
    res.status(200).send({success : true , data : people})
})

app.use(express.urlencoded({extended : false}));
// below middleware is used for sending json data 
app.use(express.json());
app.post('/login', (req, res)=>{
    const {name} = req.body
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please use credntials');
})
app.post('/api/people', (req, res)=>{
    const {name} = req.body;
    if(!name){
       return res.status(404).json({success : false , message : "please provide name"});
    }
 res.status(200).send({success : true, person : name})
})

app.post('/api/people/postman', (req, res)=>{
    const {name} = req.body
    if(!name){
       return res.status(400).json('please add name');
    }
    res.status(200).json([...people, {name}]);
})
// put method (updating the data)
  app.put('/api/people/postman/:id',(req, res)=>{
       const {id} = req.params;
       const {name} = req.body;
       const person = people.find((person)=>person.id === Number(id))
       if(!person){
        return  res.status(400).json({success : false, message: `No person found with id ${id}`})
       }
       const newPeople = people.map((person)=>{
           if(person.id === Number(id)){
            person.name = name;
           }
           return person;
       })
       res.status(200).json({success: true, data :newPeople})
  })

// delete method

app.delete('/api/people/postman/:id', (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
      return  res.status(401).json({success : false , message : `not found id ${id}`})
    }
    const newData = people.filter((person)=>person.id !== Number(id))
    res.status(200).json({success : true, data : newData});
})

app.listen(5000, ()=>{
    console.log("Server is listing on port 5000");
})

