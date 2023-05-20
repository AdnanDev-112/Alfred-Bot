const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    }
})
// Create the User model
const User = mongoose.model('User', UserSchema);
module.exports =  User