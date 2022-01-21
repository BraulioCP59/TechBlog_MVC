const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

//All routes use '/comment'

//Get all comments
router.get('/', async (req, res) => {
    try
    {
        const allCommentData = await Comment.findAll();
        res.status(200).json(allCommentData);
    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
})

//Get comment by :id
router.get('/:id', async (req, res) => {
    try
    {
        const commentData = await Comment.findByPk(req.params.id);
        
        if(!commentData)
        {
            res.status(404).json({message: 'No comment with that id found!'});
            return;
        }

        res.status(200).json(commentData);

    }catch(err)
    {
        res.status(500).send(err);
    }
})

//Create a comment
router.post('/', async (req, res) => {
    /*
    use this for post..
    {
        "content": "an amazing comment by a dude my guy!"
        "created": ,
        "author_id": 1,
        "post_id": 1
    }
    */
    try
    {
        const newComment = await Comment.create(req.body);
        res.status(201).json({message: "A new comment has been successfully been created!",body: newComment});
    }catch(err)
    {
        res.status(500).send(err);
    }
})

//Update a comment by :id
router.put('/:id', async (req, res) => {
    try
    {
        const updatedComment = await Comment.update(req.body, {where: {id: req.params.id}});

        if(!updatedComment)
        {
            res.status(404).json({message: 'Comment with that id was not found!'});
            return;
        }

        res.status(204).json({message: 'Comment has been successfully been updated', body: updatedComment});

    }catch(err)
    {
        res.status(500).send(err);
    }
})

//Delete a comment by :id
router.delete('/:id', async (req, res) => {
    try
    {
        const deletedComment = await Comment.destroy({where: {id: req.params.id}});

        if(!deletedComment)
        {
            res.status(404).json({message: 'Comment with that id was not found!'});
            return;
        }

        res.status(204).json({message: 'Comment has been successfully deleted!'});

    }catch(err)
    {
        res.status(500).send(err);
    }
});

module.exports = router;