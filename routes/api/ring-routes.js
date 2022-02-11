const router = require('express').Router();
const { Ring } = require('../../models');

// GET /api/rings
router.get('/', (req, res) => {
  Ring.findAll()
    .then(allRings => res.json(allRings))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/rings/:
router.get('/:id', (req, res) => {
  Ring.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(oneRing => {
      if (!oneRing) {
        res.status(404).json({ message: 'No ring found with this id' });
        return;
      }
      res.json(oneRing);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
})

// POST /api/rings
router.post('/add', (req, res) => {
  Ring.create({
    user_id: req.body.user_id,
    size: req.body.size,
    band_id: req.body.band_id,
    stone_id: req.body.stone_id,
  })
    .then(userInput => res.json(userInput))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/rings/:
router.put('/add/:id', (req, res) => {
  Ring.update({
    where: {
      user_id: req.body.user_id,
      size: req.body.size,
      band_id: req.body.band_id,
      stone_id: req.body.stone_id,
    }
  })
    .then(userInput => {
      res.json(userInput);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/rings/:
router.delete('/:id', (req, res) => {
  Ring.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(userData => {
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router