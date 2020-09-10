const express = require('express')
const routes = require('./api')
const data = require('./data')

const app = express()
const port = process.env.PORT || 5000

app.use('/api', routes)

app.get('/', (err, res, req) => {
    res.send(`<h1>Sebas backend API</h1><div><p>go to endpoint '/api' for more details</p></div>`);
});

app.listen(port, () => console.log(`Server running on port ${port}`))
