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
    thoughts: [],
    friends: []
});

const User = model('User', UserSchema);

module.exports = User;