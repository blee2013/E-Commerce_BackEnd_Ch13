const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//localhost:3001/api/categories
router.get('/', (req, res) => {
  // find all categories
    // be sure to include its associated Products

  Category.findAll({
    include: [
    {
      model: Product,
      attributes: [
        'product_name',
        'price',
        'stock']
    }
  ]
  })
    .then(dbcategory => res.json(dbcategory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // console.log(req.params.id)
  // res.send("getting my id")

  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: [
          'product_name',
          'price',
          'stock']
      }
    ]
  })
    .then(dbcategory=> {
      res.json(dbcategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  console.log(req.body)
  // create a new category
  Category.create(req.body)
    .then(dbcategory => res.json(dbcategory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  console.log(req);
  // update a category by its `id` value
  Category.update(req.body, {
    where:  {
      id: req.params.id
    }
  })
    .then(dbcategory => {
      res.json(dbcategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbcategory => {
      
      res.json(dbcategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
