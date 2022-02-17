const router = require('express').Router();
const { Op } = require('sequelize')
const Ring = require('../models/Ring')
const Images = require('../models/Image')

const apiRoutes = require('./api/');

router.use('/api', apiRoutes);

//page rendering
router.get('/', (req, res) => res.render('start-building', { layout: 'landing'}));
router.get('/main', (req, res) => res.render('start-building', { style: 'style-main.css'}));
router.get('/login', (req, res) => res.render('login', { style: 'style-login.css'}));
router.get('/build', (req, res) => res.render('ring-creator', { layout: "ring-creator-layout",
                                                             style: 'style-ring.css'}));
router.get('/ring/:id', (req, res) => {
    Ring.findByPk(req.params.id)
    .then(function({dataValues}){
        return dataValues
    })
    .then(function(ringData){
        console.log(ringData)
        return Images.findAll(
            {
                where:{
                    [Op.and]: [{stone_id: ringData.stone_id }, {band_id: ringData.band_id}]
                    
                }
            }
            )
        })
        .then(function(ringImage){
            const rings = ringImage.map(ring => ring.get({ plain: true }));
            console.log(rings)
            res.render('final-render', {rings, style: 'style-final-css'})
    })
} );

    
module.exports = router;