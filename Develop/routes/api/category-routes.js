const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//localhost:3001/api/categories
router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.send("getting my id")
  
  // find one category by its `id` value


  // be sure to include its associated Products

});

router.post('/', (req, res) => {
  console.log(req.body)
  // create a new category
});

router.put('/:id', (req, res) => {
  console.log(req.params.id)

  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  console.log(req.params.id)

  // delete a category by its `id` value
});

module.exports = router;
