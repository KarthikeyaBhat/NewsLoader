const express = require('express');
var request = require('request');
var bodyparser = require('body-parser')
var multer = require('multer')
const app = express();
const port = process.env.PORT || 5000;
var upload = multer();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.get('/getWeather', (req, res) => {
    request(`http://api.weatherstack.com/current?access_key=65fecd4a6b658225113fde7a2937c02c&query=$({nav.})`,(error,response,body)=>{
        if(!error && response.statusCode==200){
            var parsedBody = JSON.parse(body)
            var temp_c = parsedBody["current"]["temperature"]
            res.send({temp_c});
        }
    })
  })

app.get('/getDate',(req,res)=>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    let fullDate = `${date}th ${month} ${year}`;
    res.send({fullDate});
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
//apixu - free weather api
/* 
app.get('/signinForm',function(req,res){
  res.render('form')
}) */

/* app.set('view engine','pug')
app.set('views','/views') */

/* app.post('/signup',function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;
  
    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone
    }
    db.collection('userinfo').insertOne(data,function(err, collection){
      if (err) throw err;
      console.log("Record inserted Successfully");
            
  });
        
  return res.redirect('signup_success.html');
})

app.get('/signupForm',function(req,res){
  res.set({
    'Access-control-Allow-Origin':'*'
  })
  return res.redirect('singupForm.pug');
}).listen(port)

app.post('/signin',function(req,res){
  
}) */
