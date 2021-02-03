const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
        // required
        // must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now
        // use moment.js in a getter method to format the timestamp on query
    },
    username: {
        type: String
        // required
    },
    reactions: []
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;