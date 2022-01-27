const router = require('express').Router();
//const withAuth = require('../utils/auth');
const { Post, User, Comment} = require('../models');

router.get('/:id', async (req, res) => {
    try
    {
        if(!req.session.logged_in)
        {
            res.redirect('/login');
        }else
        {
            const userPostData = await Post.findAll({
                where: {
                    author_id: req.params.id
                },
                include: [
                    {
                        model: User,
                        attributes: ['name'],
                    },
                    {
                        model: Comment
                    }
                ],
            });
    
            const userPosts = userPostData.map((posts) => posts.get({plain: true }));
            console.log(userPosts);
    
            res.render('dashboard', {
                userPosts,
                logged_in: req.session.logged_in
            });
        }

    }catch(err)
    {
        res.status(404).render('404');
    }
})

module.exports = router;
