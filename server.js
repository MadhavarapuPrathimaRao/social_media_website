const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Simulated in-memory database for this example
const posts = [];

app.post('/api/posts', (req, res) => {
    const { content } = req.body;
    const newPost = { id: posts.length + 1, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
