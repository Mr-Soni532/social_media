const express = require('express');
const connectToMongo = require('./config/db');
const cors = require('cors');
const userRouter = require('./routers/users.router');
const postsRouter = require('./routers/posts.router');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use('/users/', userRouter)
app.use('/posts/', postsRouter)

app.get('/', (req, res) => {
    res.send('Welcome, server is working fine.')
})

app.listen(PORT, async () => {
    try {
        await connectToMongo();
        console.log(`SocialMedia backend @ port ${PORT}`)
    } catch (error) {
        console.log(error, 'Something went wrong while listening')
    }
})