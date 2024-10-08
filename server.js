const express = require('express');
const app = express();
const port = 4000;

jokeLikes = {};

app.get("/api/likes/:jokeId", (req, res) => {
    if (jokeLikes.hasOwnProperty(req.params.jokeId)){
        res.json({numLikes: jokeLikes[req.params.jokeId]})
    }
    else
    {
        res.json({numLikes: 0});
    }
});

app.get("/api/topJokes", (req, res) => {
    res.json({topJokes: Object.keys(jokeLikes).sort((a, b) => jokeLikes[b] - jokeLikes[a]).slice(0, 10)})
});

app.post("/api/addLike/:jokeId", (req, res) => {
    if (jokeLikes.hasOwnProperty(req.params.jokeId)){
        jokeLikes[req.params.jokeId]++;
    }
    else
    {
        jokeLikes[req.params.jokeId] = 1;
    }
})

app.post("/api/removeLike/:jokeId", (req, res) => {
    if (jokeLikes[req.params.jokeId]-- == 0){
        delete jokeLikes.req.params.jokeId;
    }  
})

app.listen(port);