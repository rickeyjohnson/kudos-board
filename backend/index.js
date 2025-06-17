const express = require('express')
const cors = require('cors')
const app = express()
const boardsRouter = require('./routes/boards')
const port = process.env.PORT | 3000

// Middleware
app.use(express.json())

// CORS
app.use(cors())

// Routes
app.use('/boards', boardsRouter)

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Rickeys Kudos Board API')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})