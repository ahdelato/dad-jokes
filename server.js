const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

jokeLikes = {};

let corsOptions = {
    origin: [ 'http://localhost:4200', 'http://localhost:3000' ]
};

app.get("/api/likes/:jokeId", cors(corsOptions), (req, res) => {
    console.log(req.params.jokeId);
    if (jokeLikes.hasOwnProperty(req.params.jokeId)){
        res.json({numLikes: jokeLikes[req.params.jokeId]})
    }
    else
    {
        res.json({numLikes: 0});
    }
});

app.get("/api/topJokes", cors(corsOptions), (req, res) => {
    console.log("top called");
    res.json({topJokes: Object.keys(jokeLikes).sort((a, b) => jokeLikes[b] - jokeLikes[a]).slice(0, 10)})
});

app.put("/api/addLike/:jokeId", cors(corsOptions), (req, res) => {
    console.log("add like called");
    if (jokeLikes.hasOwnProperty(req.params.jokeId)){
        jokeLikes[req.params.jokeId]++;
    }
    else
    {
        jokeLikes[req.params.jokeId] = 1;
    }
})

app.put("/api/removeLike/:jokeId", cors(corsOptions), (req, res) => {
    console.log("remove like called");
    if (jokeLikes[req.params.jokeId]-- == 0){
        delete jokeLikes.req.params.jokeId;
    }  
})

app.listen(port, () => {
    console.log("Server listening on port " + port);
});