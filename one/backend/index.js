import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT

app.get('/', (req,res)=>{
    res.send('hello world')
})
app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'joke 1',
            content: 'hahaha'
        },
        {
            id: 2,
            title: 'joke 2',
            content: 'hihihi'
        }
    ]
    res.send(jokes)
})

app.listen(port, ()=>{
    console.log(`it working in this link "http://localhost:${port}"`)
})