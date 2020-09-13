const express = require('express')
const routes = require('./routes')
const data = require('./db')

const app = express()
const port = process.env.PORT || 5000

// connect to database
data.init()

// init middleware
app.use(express.json())

// init routes
app.use('/api', routes)

// default page
app.get('/', (err, res, req) => {
    res.send(`<h1>Sebas backend API</h1><div><p>go to endpoint '/api' for more details</p></div>`);
});

// listen on port
app.listen(port, () => console.log(`Server running on port ${port}`))
