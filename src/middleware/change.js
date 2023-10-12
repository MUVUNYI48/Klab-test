export const changedTime = (req, res, next)=>{
  req.time = Date.now();
  console.log('logger',req.time);
  console.log('data expected from logger')
  next();
};


