const router = require('express').Router();
const {Post, User, Comment} = require('../models');
//const withAuth = require('../utils/auth');


router.get('/:id', async (req, res) => {
    try
    {
        if(!req.session.logged_in)
        {
            res.redirect('/login');
        }else
        {
            const postData = await Post.findByPk(req.params.id, {include: [{model: User, attributes: ['name']},{model: Comment}]});
            const post = postData.get({plain: true });
            console.log(post);

            res.render('comment', {
                post, 
                logged_in: req.session.logged_in
            });
        }

    }catch(err)
    {
        res.status(404).render('404');
    }
})

module.exports = router;
