const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
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
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(deleteThought);
    
module.exports = router;