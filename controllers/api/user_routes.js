const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

//All routes use '/user'

//Get all users
router.get('/', async (req, res) => {
    try
    {
        const allUserData = await User.findAll({include:[{model: Post}]});
        res.status(200).json(allUserData);
    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
})

//Get user by :id
router.get('/:id', async (req, res) => {
    try
    {
        const userData = await User.findByPk(req.params.id, {include:[{model: Post}]});
        
        if(!userData)
        {
            res.status(404).json({message: 'No user with that id found!'});
            return;
        }

        res.status(200).json(userData);

    }catch(err)
    {
        res.status(500).send(err);
    }
})

//Create a user
router.post('/', async (req, res) => {
    /*
    use this for post..
    {
        "name": "dude Mguy"
        "email": "test@test.com"
        "password": "123456789"
    }
    */
    try
    {
        const newUser = await User.create(req.body);
        res.status(201).json({message: "A new user has been successfully been created!",body: newUser});
    }catch(err)
    {
        res.status(500).send(err);
    }
})

//Update a user by :id
router.put('/:id', async (req, res) => {
    try
    {
        const updatedUser = await User.update(req.body, {where: {id: req.params.id}});

        if(!updatedUser)
        {
            res.status(404).json({message: 'User with that id was not found!'});
            return;
        }

        res.status(204).json({message: 'User has been successfully been updated', body: updatedUser});

    }catch(err)
    {
        res.status(500).send(err);
    }
})

//Delete a user by :id
router.delete('/:id', async (req, res) => {
    try
    {
        const deletedUser = await User.destroy({where: {id: req.params.id}});

        if(!deletedUser)
        {
            res.status(404).json({message: 'User with that id was not found!'});
            return;
        }

        res.status(204).json({message: 'User has been successfully deleted!'});

    }catch(err)
    {
        res.status(500).send(err);
    }
});

module.exports = router;