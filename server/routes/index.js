var express = require('express');
var router = express.Router();
var http = require('http');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const mongoose = require('mongoose');

const uri = "mongodb+srv://idriss:Va2lG0RNx3nOeCbd@cluster0.l8uax.mongodb.net/trendindi?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=> console.log('Connected to DB ....'))
  .catch((error)=> console.error(error));


  const Adminschema =   new mongoose.Schema({
    Name: {
        type: String,
        required:true
    },
    Email:{
      type: String,
      required:true,
      unique:true
  },
  Password:{
      type: String,
      required:true
  }
})
  const Admin = mongoose.model('Admin', Adminschema);

  async function createAdmin(Name ,Email , Password) {
    const admin = Admin({
      Name ,Email , Password
    })
    const saltRound = 10;
    admin.Password = await bcrypt.hash(admin.Password, saltRound);
    const result = await admin.save();
    console.log(result);
}
//createAdmin("Idriss" ,"idriss.mortabit@gmail.com" , "9331idriss")

router.post('/api/auth',async(req,res) =>{
  const schema ={
      username : Joi.string().required().email(),
      userpassword : Joi.string().required()
  }
  console.log(req.body.username);
  // const {error} = Joi.validate(req.body, schema);
  // if(error){
  //      res.locals = {error :"Invalid Username or Password"}
     // return res.redirect(301, '/admin/login');
  // }
  console.log(req.body.password);
  let user = await Admin.findOne({Email: req.body.username})
  let chechPassword = await bcrypt.compare(req.body.userpassword, user.Password);
  if(!user || !chechPassword){
        response = {data :"invalid"}
        res.send(response);
  }
  else{
      response = {data :"valid"}
      res.send(response);
  }
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
