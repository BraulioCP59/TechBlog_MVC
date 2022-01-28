const router = require('express').Router();
const user_routes = require('./user_routes');
const authenticate_routes = require('./authenticate_routes');
const post_routes = require('./post_routes');
const comment_routes = require('./comment_routes');


router.use('/user', user_routes);
router.use('/auth', authenticate_routes);
router.use('/post', post_routes);
router.use('/comment', comment_routes);

module.exports = router;
