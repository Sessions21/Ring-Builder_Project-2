const router = require('express').Router();
const { Stone } = require('../../models');

// GET /api/stones
router.get('/', (req, res) => {
 Stone.findAll()
    .then(allStones => res.json(allStones))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/stones/:
router.get('/:id', (req, res) => {
 Stone.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(oneStone => {
      if (!oneStone) {
        res.status(404).json({ message: 'No stone found with this id' });
        return;
      }
      res.json(oneStone);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/stones
router.post('/', (req, res) => {
 Stone.create({
    type: req.body.type,
    shape: req.body.shape,
    user_id: req.body.user_id,
    ring_id: req.body.ring_id
  })
    .then(userInput => res.json(userInput))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/stones/:
router.put('/:id', (req, res) => {
 Stone.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(userInput => {
      if (!userInput[0]) {
        res.status(404).json({ message: 'No stone found with this id' });
        return;
      }
      res.json(userInput);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/stones/:
router.delete('/:id', (req, res) => {
 Stone.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No stone found with this id' });
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