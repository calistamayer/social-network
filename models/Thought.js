const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
        // use moment.js in a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        {
            reactionId: {
                type: ObjectId
                // default value is set to a new object id
            },
            reactionBody: {
                type: String,
                required: true,
                maxlength: 280
            },
            username: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
                // use moment in a getter method to format the timestamp on query
            }
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// get total count of reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;