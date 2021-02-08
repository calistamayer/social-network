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
    reactions: [
        {
            reactionId: {
                type: ObjectId
                // default value is set to a new object id
            },
            reactionBody: {
                type: String
                // required
                // 280 character maximum
            },
            username: {
                type: String
                // required
            },
            createdAt: {
                type: Date,
                default: Date.now
                // use moment in a getter method to format the timestamp on query
            }
        }
    ]
});

// get total count of reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;