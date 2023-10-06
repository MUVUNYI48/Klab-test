const changedTime = function changedTime(req, res, next) {
  req.time = Date.now();
  console.log('logger',req.body);
  console.log()
  next();
};

module.exports=changedTime;

