const router = require('express').Router();
//const withAuth = require('../utils/auth');
const { Post, User} = require('../models');

router.get('/update', async (req, res) => {
    try
    {
        res.render('updatePost');
    }catch(err)
    {
        res.status(404).render('404');
    }
})

module.exports = router;
