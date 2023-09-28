
let {people} = require('../data')
const getPeople = (req, res)=>{
    res.status(200).send({success : true , data : people})
}

const sendPeople = (req, res)=>{
    const {name} = req.body;
    console.log(req.body);
    if(!name){
       return res.status(404).json({success : false , message : "please provide name"});
    }
 res.status(200).send({success : true, person : name})
}

const sendPeople1 = (req, res)=>{
    const {name} = req.body
    if(!name){
       return res.status(400).json('please add name');
    }
    res.status(200).json([...people, {name}]);
}

const updatePeople =(req, res)=>{
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
}

const deletepeople =  (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
      return  res.status(401).json({success : false , message : `not found id ${id}`})
    }
    const newData = people.filter((person)=>person.id !== Number(id))
    res.status(200).json({success : true, data : newData});
}
module.exports = {getPeople,   sendPeople,   sendPeople1, updatePeople  , deletepeople}