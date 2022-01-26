const router = require('express').Router();
//const withAuth = require('../utils/auth');
const { Post, User} = require('../models');

router.get('/create', async (req, res) => {
    try
    {
        res.render('createPost');
    }catch(err)
    {
        res.status(404).render('404');
    }
})

module.exports = router;
