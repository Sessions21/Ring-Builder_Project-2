const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
  User.findAll()
    .then(allUsers => res.json(allUsers))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(oneUser => {
      if (!oneUser) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(oneUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;