const express =  require('express');
const app = express();
const port = 3000;

const users = require('./data/users');
const posts = require('./data/posts');

//Create our first route
app.get('/', (req,res) => {
    res.send("Work in progress");
})


app.get('/api/users/:id', (req, res, next)=>{
    const user = users.find((u)=> u.id == req.params.id);
    if(user) res.json(user);
    else next()
});

app.get('/api/posts', (req,res)=>{
    res.json(posts);
});

app.get('api/posts/:id', (req, res, next) =>{
    const post = post.find((p) => p.id == req.params.id)
    if(post) res.json(post);
    else next()
 })

// Middleware at the end of the route
app.use((req,res)=>{
    res.status(404).json({error: 'resource not found'})
})

app.listen(port, () => {
    console.log(`server listening to port: ${port}`);
})
