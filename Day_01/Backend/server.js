import express from "express"
import 'dotenv/config'

// Port
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send("Root Page")
})

app.get('/api/user', (req, res) => {
    const userData = [
        {
          "id": 1,
          "name": "Tusar",
          "email": "tusar@example.com"
        },
        {
          "id": 2,
          "name": "Rahim",
          "email": "rahim@example.com"
        },
        {
          "id": 3,
          "name": "Karim",
          "email": "karim@example.com"
        }
      ]
    res.send(userData);
})


app.listen(port, () => {
    console.log(`successful: http://localhost:${port}`);
})
