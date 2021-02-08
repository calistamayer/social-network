const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String
        // unique
        // required
        // trimmed
    },
    email: {
        type: String
        // required
        // unique
        // must match valid email address (Mongoose matching validation)
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
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

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;