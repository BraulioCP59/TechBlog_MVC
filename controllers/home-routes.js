const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User} = require('../models');

router.get('/', async (req, res) => {
    try
    {

    }catch(err)
    {
        res.status(404).render('404');
    }
})
