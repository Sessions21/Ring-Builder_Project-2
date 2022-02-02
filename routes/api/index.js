const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// const bandRoutes = require('./band-routes.js');
// const stoneRoutes = require('./stone-routes.js');

router.use('/users', userRoutes);
// router.use('/bands', bandRoutes);
// router.use('/stones', stoneRoutes);

module.exports = router;