const router = require('express').Router();
const { Image } = require('../../models');

// GET /api/images
router.get('/', (req, res) => {
  Image.findAll()
    .then(allImages => res.json(allImages))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/images/:
router.get('/:id', (req, res) => {
  Image.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(oneImage => {
      if (!oneImage) {
        res.status(404).json({ message: 'No image found with this id' });
        return;
      }
      res.json(oneImage);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/images
router.post('/', (req, res) => {
  Image.create({
    image: req.body.image,
    band_id: req.body.band_id,
    stone_id: req.body.stone_id,
    stone_band_id: req.body.stone_id
  })
    .then(userInput => res.json(userInput))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/images/:
router.put('/:id', (req, res) => {
  Image.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(userInput => {
      if (!userInput[0]) {
        res.status(404).json({ message: 'No image found with this id' });
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
  Image.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No image found with this id' });
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