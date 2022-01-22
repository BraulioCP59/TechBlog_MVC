const sequelize = require('../config/connection');
const {User, Post, Comment} = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');

    const users = await User.bulkCreate(userData, {individualHooks: true, returning: true});
    console.log('\n----- Users Seeded! -----\n');

    const posts = await Post.bulkCreate(postData);
    console.log('\n----- Posts Seeded! -----\n');

    const comments = await Comment.bulkCreate(commentData);
    console.log('\n----- Comments Seeded! -----\n');

    process.exit(0);
}

seedAll();