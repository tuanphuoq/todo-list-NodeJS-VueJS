const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/home', (req, res) => {
    var a = 1
    var b = 2
    var c = a + b
    console.log(c)
    return res.send("Home")
})
app.listen(port, () => console.log('app listening at http://localhost:' + port))

