const express = require('express')
const frontRouter = require('./routes/front.js')
const logPort = require('./middlewares/logPort')

const app = express()
const PORT = process.env.PORT || 3002

app.use(express.json())
//app.use(logPort)
app.use(frontRouter)

app.listen(PORT, ()=>{
    console.log('Front server ir up and running on port:'+ PORT)
})