const router = require('express').Router();
const api_routes = require('./api');
const home_routes = require('./home-routes');
const login_routes = require('./login-routes');
const signUp_routes = require('./signup-routes');
const dashboard_routes = require('./dashboard-routes');
const viewPost_routes = require('./viewPost-routes');

router.use('/api', api_routes);
router.use('/', home_routes);
router.use('/login', login_routes);
router.use('/signup', signUp_routes);
router.use('/dashboard', dashboard_routes);
router.use('/post', viewPost_routes);



module.exports = router;