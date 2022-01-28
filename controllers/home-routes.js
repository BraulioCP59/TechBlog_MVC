const router = require('express').Router();
//const withAuth = require('../utils/auth');
const { Post, User, Comment} = require('../models');

router.get('/', async (req, res) => {
    try
    {
        //query all post data for Post Title, date created
        const allPostData = await Post.findAll({
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

        const posts = allPostData.map((post) => post.get({ plain: true }));
        res.render('home', {
            posts,
            logged_in: req.session.logged_in
        });

    }catch(err)
    {
        res.status(404).render('404');
    }
})

module.exports = router;
