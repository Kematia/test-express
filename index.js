const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello Index!')
    console.log('index hit')
})

app.get('/hello', (req, res) => {
    res.send('Hello World!')
    console.log('hello hit')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
