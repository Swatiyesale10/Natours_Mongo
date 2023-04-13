const express = require('express');
const authController = require('../controllers/authController');
const commentController = require('../controllers/commentController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(commentController.getAllComment)
  .post(
    authController.restrictTo('user'),
    commentController.setTourUserIds,
    commentController.createComment
  );

router.route('/:id').get(commentController.getComment);

module.exports = router;
