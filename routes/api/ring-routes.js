const router = require('express').Router();
const { Ring } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/rings
router.get('/', withAuth, (req, res) => {
  Ring.findAll()
    .then(allRings => res.json(allRings))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/rings/:
router.get('/:id', withAuth, (req, res) => {
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

// POST /api/rings
router.post('/add', withAuth, (req, res) => {
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
  Ring.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(userInput => {
      if (!userInput[0]) {
        res.status(404).json({ message: 'No ring found with this id' });
        return;
      }
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
      if (!userData) {
        res.status(404).json({ message: 'No ring found with this id' });
        return;
      }
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router