const express = require('express');
const router = express.Router();//HTTP (Hypertext Transfer Protocol). 
const AuthorController = require('../controllers/authorController');
const BlogController = require('../controllers/blogController');
const middleware = require('../middleware/auth');

router.post('/authors', AuthorController.createAuthor);

router.post('/login', AuthorController.loginAuthor);

router.post('/blogs', middleware.authenticate, BlogController.createBlog);

router.get('/blogs', middleware.authenticate, BlogController.getAllBlogs);

router.put('/blogs/:blogId', middleware.authenticate, middleware.authorise,BlogController.updateBlog);

router.delete('/blogs/:blogId',middleware.authenticate,middleware.authorise,BlogController.deleteByParams);

router.delete('/blogs', middleware.authenticate, BlogController.deletedByQuery);



module.exports = router;

