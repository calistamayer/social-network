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
    .get(getAllThought)
    .post(createThought);

// set up GET one, PUT and DLETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;