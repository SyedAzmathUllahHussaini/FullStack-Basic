import express from "express"

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Server is Ready to connect with Frontend...")
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke ONE",
            cotent: "This is First Joke"
        },
        {
            id: 2,
            title: "Joke TWO",
            cotent: "This is Second Joke"
        },
        {
            id: 3,
            title: "Joke Three",
            cotent: "This is Third Joke"
        },
        {
            id: 4,
            title: "Joke Four",
            cotent: "This is Fourth Joke"
        },
        {
            id: 5,
            title: "Joke Five",
            cotent: "This is Fiveth Joke"
        },
    ]

    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server is listing at http://localhost:${port}`);
})
