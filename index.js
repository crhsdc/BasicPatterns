const express = require('express');
const bodyParser = require('body-parser');
const handlified = require('./handlers');


const services = require('./services');
const  usersHandler = handlified('users');
const  postHandler = handlified('posts');


const app = express(); 
const port = 3000; 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


app.get('/', usersHandler(services).get);
app.post('/', usersHandler(services).post);
app.put('/:id', usersHandler(services).put);
app.delete('/:id', usersHandler(services).delete);

app.get('/posts', postHandler(services).get);




const defaultMessage = () => console.log(`Example app listening on port: ${port}`)
app.listen(port, defaultMessage);