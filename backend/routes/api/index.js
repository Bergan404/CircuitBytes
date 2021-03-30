const router = require('express').Router();
const sessionRouter = require('./session.js');
const userRouter = require('./user.js')
const postRouter = require('./post.js')
const cartRouter = require('./shoppingCart.js')
const deleteRouter = require('./delete.js')

router.use('/session', sessionRouter);

router.use('/users', userRouter);

router.use('/posts', postRouter);

router.use('/shopping-cart', cartRouter)

router.use('/posts/delete', deleteRouter)


module.exports = router;
