const express = require('express')
const app = express()
const port = process.env.PORT || 56354

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
