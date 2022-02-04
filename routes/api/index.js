const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const bandRoutes = require('./band-routes.js');
const stoneRoutes = require('./stone-routes.js');
const imageRoutes = require('./image-routes.js');

router.use('/users', userRoutes);
router.use('/bands', bandRoutes);
router.use('/stones', stoneRoutes);
router.use('/images', imageRoutes);

module.exports = router;