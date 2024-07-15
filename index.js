const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

//------ middlewere ----
const corsOptions = {
    origin:['http://localhost:5173', 'http://localhost:5174'],
    credentials:true,
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))
app.use(express.json())



app.get('/', (req, res) => {
    res.send('We are going to make an Find job website.')
})

app.listen(port, () => {
    console.log(`Find Job server running on port ${port}`)
})