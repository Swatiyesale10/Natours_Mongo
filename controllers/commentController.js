const Comment = require('../models/commentModel');
const factory = require('./handlerFactory');
//const catchAsync = require('../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getComment = factory.getOne(Comment);
exports.createComment = factory.createOne(Comment);
exports.getAllComment = factory.getAll(Comment);
