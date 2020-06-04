const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT||5000;

app.use(bodyParser.json());//json type data
app.use(bodyParser.urlencoded({extended: true}));

// const data = fs.readFileSync('./database.json');
// const conf = JSON.parse(data);
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host:conf.host,
//   user:conf.user,
//   password:conf.password,
//   port:conf.port,
//   database:conf.database
// });

// connection.connect();

app.get('/api/customers', (req,res)=>{
    res.send([{
        'id':1,
        'image':'https://placeimg.com/64/64/1',
        'name': '홍길동',
        'birthday':'970418',
        'gender':'남성',
        'jab':'대학생'
      },{
        'id':2,
        'image':'https://placeimg.com/64/64/2',
        'name': '토마토',
        'birthday':'951009',
        'gender':'남성',
        'jab':'직장인'
      },{
        'id':3,
        'image':'https://placeimg.com/64/64/3',
        'name': '우아에',
        'birthday':'910617',
        'gender':'여성',
        'jab':'디자이너'
      }]);
});

// app.get('/api/db/customers', (req,res) =>{
//   connection.query(
//     "SELECT * FROM CUSTOMER",
//     (err,rows, fields) =>{
//       res.send(rows);
//     }
//   )
// });

app.listen(port, ()=> console.log(`Listening on port ${port}`));