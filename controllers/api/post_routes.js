const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

//All routes use '/post'

//Get all posts
router.get('/', async (req, res) => {
    try
    {
        const allPostData = await Post.findAll({include:[{model: Comment}]});
        res.status(200).json(allPostData);
    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
})

//Get post by :id
router.get('/:id', async (req, res) => {
    try
    {
        const postData = await Post.findByPk(req.params.id, {include:[{model: Comment}]});
        
        if(!postData)
        {
            res.status(404).json({message: 'No post with that id found!'});
            return;
        }

        res.status(200).json(postData);

    }catch(err)
    {
        res.status(500).send(err);
    }
})

//Create a post
router.post('/', async (req, res) => {
    /*
    use this for post..
    {
        "title": "dude Mguy"
        "content": "an amazing post about a dude my guy!"
        "created": ,
        "author_id": 1
    }
    */
    try
    {
        const newPost = await Post.create(req.body);
        res.status(201).json({message: "A new post has been successfully been created!",body: newPost});
    }catch(err)
    {
        res.status(500).send(err);
    }
})

//Update a post by :id
router.put('/:id', async (req, res) => {
    try
    {
        const updatedPost = await Post.update(req.body, {where: {id: req.params.id}});

        if(!updatedPost)
        {
            res.status(404).json({message: 'Post with that id was not found!'});
            return;
        }

        res.status(204).json({message: 'Post has been successfully been updated', body: updatedPost});

    }catch(err)
    {
        res.status(500).send(err);
    }
})

//Delete a post by :id
router.delete('/:id', async (req, res) => {
    try
    {
        const deletedPost = await Post.destroy({where: {id: req.params.id}});

        if(!deletedPost)
        {
            res.status(404).json({message: 'Post with that id was not found!'});
            return;
        }

        res.status(204).json({message: 'Post has been successfully deleted!'});

    }catch(err)
    {
        res.status(500).send(err);
    }
});

module.exports = router;