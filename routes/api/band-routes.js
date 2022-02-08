const router = require('express').Router();
const { Band } = require('../../models');

// GET /api/bands
router.get('/', (req, res) => {
  Band.findAll()
    .then(allBands => res.json(allBands))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/bands/:
router.get('/:id', (req, res) => {
  Band.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(oneBand => {
      if (!oneBand) {
        res.status(404).json({ message: 'No band found with this id' });
        return;
      }
      res.json(oneBand);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/bands
router.post('/', (req, res) => {
  Band.create({
    metal: req.body.metal,
  })
    .then(userInput => res.json(userInput))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/bands/:
router.put('/:id', (req, res) => {
  Band.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(userInput => {
      if (!userInput[0]) {
        res.status(404).json({ message: 'No band found with this id' });
        return;
      }
      res.json(userInput);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/bands/:
router.delete('/:id', (req, res) => {
  Band.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No band found with this id' });
        return;
      }
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;