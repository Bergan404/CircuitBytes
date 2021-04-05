const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const db = require('../../db/models/');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validatePost = [
    check('postTitle')
        .exists({checkFalsy: true})
        .withMessage("Please Provide a title for your post."),
    handleValidationErrors,
]

router.get('/:id', asyncHandler(async (req, res) => {
    let id = Number(req.params.id)
    const posts = await db.post.findAll({where: {userId: id}});
    res.json(posts)
}))

router.post('/', validatePost, asyncHandler(async (req, res) => {
    const {
        postTitle,
        description,
        highlights,
        listPicture,
        price,
        userId,
    } = req.body;

    const Posts = await db.Post.create({
        postTitle,
        description,
        highlights,
        listPicture,
        price,
        userId,
    });
    res.json(Posts)
}))

router.get('/', asyncHandler(async (req, res) => {
    const allPosts = await db.Post.findAll()
    res.json(allPosts)
}))

router.get('/', asyncHandler(async (req, res) => {
    const addPostToCart = await db.Post.findOne()
    res.json(addPostToCart)
}))

module.exports = router;
