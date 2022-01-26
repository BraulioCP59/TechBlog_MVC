const router = require('express').Router();
//const withAuth = require('../utils/auth');
const { Post, User, Comment} = require('../models');

router.get('/:id', async (req, res) => {
    try
    {
        const postData = await Post.findByPk(req.params.id, {
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

        const post = postData.get({plain: true });
        console.log(post);
        res.render('viewPost', {
            post,
            logged_in: req.session.logged_in
        });
    }catch(err)
    {
        res.status(404).render('404');
    }
})

module.exports = router;
