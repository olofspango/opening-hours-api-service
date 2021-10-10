const express = require('express')
const getEntry = require('./db.js')

const PORT = process.env.PORT || 5000



const app = express();


app.get('/:place_id/today/', async (req,res) => {    
    let day = new Date().getDay()    
    let data = await getEntry(req.params.place_id, day)
    console.log(data)
    res.send(data)
}) 

app.get('/:place_id/today/text', async(req,res) => {
    let day = new Date().getDay()    
    let data = await getEntry(req.params.place_id, day)
    res.send(`Opens: ${data.open.time.substr(0,2) + ":" + data.open.time.substr(2,2)}<br>Closes: ${data.close.time.substr(0,2) + ":" + data.close.time.substr(2,2)}`)
})



process.on('SIGINT', () => {
    server.close();
} )





const server = app.listen(PORT, console.log(`App running on ${PORT}`))