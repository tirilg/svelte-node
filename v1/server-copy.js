const express = require("express") //require express
const app = express() //insantiate express


// Cars array containing car objects
const aCars = [
    {"id": 1, "brand":"bmw"},
    {"id": 2, "brand":"audi"}
]

// ########################################

// Get all cars 
app.get('/cars', (req, res) => {
    res.send(aCars)
})

// ########################################

// Get car by id 
app.get('/cars/:id', (req, res) => {
    const id = req.params.id
    res.send({"id": id, "name": "A3"})
})

// ########################################

// Create car
app.post('/cars', (req, res) => {
    const jCar = {"id": 5, "brand": "mercedes"}
    aCars.push(jCar)
    res.send({"status": 1, "id": 5})
})

// ########################################

// Delete car by id 
app.delete('/cars/:id', (req, res) => {
    aCars.pop()
    res.send({"status": 1, "count": 1})
})

// ########################################

// Update car by id 
app.patch('/cars/:id', (req, res) => {
    aUsers[0].name = 'X'
    res.send(aUsers[0])
})

// ########################################

// Listen to the server at port 80
app.listen(80, error => {
    if(error) {
        console.log("server cannot listen")
        return
    }
    console.log("server listening...")
})