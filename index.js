const mongoose=require('mongoose');

const app=require("./app");

console.log('connecting to MangoDB...');
/*// 4. create a route
app.get('/posts', (request, response) => {
    response.json(posts);
});

app.post('/posts', (request, response) => {
    
    posts.push(
        {
            ...request.body,
            id: posts.length + 1
        }
    );
    response.json(
        {
            ...request.body,
            id: posts.length 
        }
    );
    
})
app.put('/posts/:id', (request, response) => {
    const id = request.params.id;
    let updatedPost = request.body;
    const toUpdatePost = posts.find(post => post.id == id);

    updatedPost = {
        ...toUpdatePost,
        ...updatedPost
    }

    posts = posts.map(post => post.id == id ? updatedPost : post);

    response.json(updatedPost);
})
app.delete('/posts/:id', (request, response) => {
    // find the post to delete
    const postToDelete = posts.find(post => post.id == request.params.id);
    if (!postToDelete) {
     response.send({
     message: 'Post not found'
     })
    }
    posts = posts.filter(post => post.id != request.params.id);
    response.json({
     message: 'Post deleted successfully'
    });
    })*/
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('connected to mangodb');

    app.listen(3002, () => {
    console.log(`Server is running on http://localhost:3002`);
});
}).catch((error)=>{
    console.log('Error connecting to mangoDB',error);
});    



