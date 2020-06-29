const Model = require('./model/index');

// add Model in req.Model with middleware

// test user
Model.User.findAll()
.then(data => {
    console.log(data);
})

// test application
Model.Application.findAll()
.then(data => {
    console.log(data);
})

console.log('ok');
