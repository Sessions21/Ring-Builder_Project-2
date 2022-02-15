const router = require('express').Router();
const { Stone } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/stones
router.get('/', withAuth, (req, res) => {
 Stone.findAll()
    .then(allStones => res.json(allStones))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/stones/:
router.get('/:id', withAuth, (req, res) => {
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
router.post('/', withAuth, (req, res) => {
 Stone.create({
    type: req.body.type,
  })
    .then(userInput => res.json(userInput))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/stones/:
router.put('/:id', withAuth, (req, res) => {
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
router.delete('/:id', withAuth, (req, res) => {
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