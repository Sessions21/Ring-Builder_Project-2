const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Ring, Image } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Ring.findAll({
    where: {
      user_id: req.session.user_id
    }
    // attributes: [
    //   'id'
    // ],
    // // include: [
    // //   {
    // //     model: Image,
    // //     attributes: ['image'],
    // //     include: {
    // //       model: User,
    // //       attributes: ['username']
    // //     }
    // //   },
    // //   {
    // //     model: User,
    // //     attributes: ['username']
    // //   }
    // // ]
  })
    .then(dbRingData => {
      const rings = dbRingData.map(ring => ring.get({ plain: true }));
      res.render('/buildS', { rings, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Ring.findByPk(req.params.id, {
    attributes: [
      'id'
    ],
    include: [
      {
        model: Image,
        attributes: ['image'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbRingData => {
      if (dbRingData) {
        const ring = dbRingData.get({ plain: true });
        
        res.render('edit-ring', {
          ring,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
