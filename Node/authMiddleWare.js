const authorize = (req, res, next)=>{
  console.log('authorize');
  const {user}  = req.query;
   
  if(user === 'jhon'){
    req.user = {name :'Jhon', id : 3};
    next();
  }
  else{
    res.status(401).send('unauthorized')
  }
  

}
module.exports = authorize;
