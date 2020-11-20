const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/home', (req, res) => {
    return res.send("Home")
})
app.listen(port, () => console.log('app listening at http://localhost:' + port))

