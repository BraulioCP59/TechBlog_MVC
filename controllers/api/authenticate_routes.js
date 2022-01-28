const router = require('express').Router();
const {User} = require('../../models');

//route for logging in and storing a session
router.post('/login', async (req, res) => {
    try
    {
        //get user data using email
        const userData = await User.findOne({ where: { name: req.body.username}});

        //returns error if no record in db using email
        if(!userData)
        {
            res.status(400).json({message: 'Incorrect email or password, please try again'});
            return;
        }

        //returns error if provided pw does not match what is stored in db
        const validPassword = await userData.checkPassword(req.body.password);
        
        if(!validPassword)
        {
            res.status(400).json({message: 'Incorrect email or password, please try again'});
            return;
        }

        //store session
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            //respond with a successful login attempt
            res.status(200).json({user: userData, message: 'You are now logged in!'});
        })

    }catch(err)
    {
        res.status(500).send(err);
    }
})

//route for logging out and terminating a session
router.get('/logout', async (req, res) => {
    
    if(req.session.logged_in) 
    {
        await req.session.destroy( () => res.status(200).end())

    }else{
      res.status(400).json({message: "This was a bad request"})
    }
})

module.exports = router;

