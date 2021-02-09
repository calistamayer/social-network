const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought);

// set up GET one, PUT and DLETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought);


router
    .route('/:userId')
    .post(createThought);

router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);
    
module.exports = router;