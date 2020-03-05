//use the express package
const express = require('express');
const app = express() //instansiate express


//json object when you have double quotes around the keys
const aUsers = [
    {"id": 1, "name": "A", "gender": "male"},
    {"id": 3, "name": "A", "gender": "male"},
    {"id": 2, "name": "B", "gender": "female"}
]


// ########################################

// main route 
// req - request. res - response
app.get('/', (req, res) => {
    //the code is automatically 200 - OK 
    res.send('test')

    //example of error 500 - internal server error 
    //res.status(500).send('testing again')
    //example of error 404 - page not found
    //res.status(404).send('testing again')
})

// ########################################

//always use a forward slash, ALWAYS
// GET ALL USER 
app.get('/users', (req, res) => {
    res.send(aUsers)
})



// ########################################

// GET ONE USER BY ID 
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    res.send({"id":id, "name":"C"})
})

// ########################################

// CREATE A NEW USER
app.post('/users', (req, res) => {
    const jUser = {"id": 3, "name": "C"}
    aUsers.push(jUser)
    res.send({"status":1, "id":3})
})


// ########################################

// DELETE A USER

app.delete('/users/:id', (req, res) => {
    aUsers.pop()
    res.send({"status": 1, "count": 1})
})

// ########################################

// UPDATE A USER 

app.patch('/users/:id', (req, res) => {
    aUsers[0].name = "X"
    res.send(aUsers[0])
})


//get users that are male or female
app.get('/users/gender/:gender', (req,res) => {
    const sGender = req.params.gender
    res.send("All " + sGender)
})

// ########################################

// GET - /users     - (all the users)
// GET - /users/3    - (gets json object of user with id 3)
// POST - /users    - (save a user)
// DELETE - /users  - (delete all users)
// DELETE - /users/5 - (delete user with id 5)
// PUT - /users/5    - (update user with id 5) - change everything in the user except the id
// PATCH - /users/3  - (update user with id 3) - change only some parts of the user

// ########################################


// listen to port 80, localhost:80
// callback because the server will listen, and then run the error function


app.listen(80, error => {
    if(error) {
        console.log('Server cannot listen')
        return
    }
    console.log('Server listening...')
})