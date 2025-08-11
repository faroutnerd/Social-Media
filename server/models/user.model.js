import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: {type:String , required: true},
    email: {type:String , required: true},
    full_name: {type:String , required: true},
    username: {type:String , unique: true},
    bio: {type:String , default: 'Hey there! How are you.'},
    profile_picture: {type: String , default: ''},
    cover_photo: {type: String , default: ''},
    location: {type: String , default: ''},
    followers: [{type: String , ref: 'User'}],
    following: [{type: String , ref: 'User'}],
    connections: [{type: String , ref: 'User'}],
}, {timestamps:true, minimize :false})

const User = mongoose.model('User', userSchema)

export default User


// minimize: false
// Normally, Mongoose removes empty objects from the document before saving.

// Example with default (minimize: true)
// const doc = { profile: {} };
// await Model.create(doc);
// // Saved result → {}

// With minimize: false:
// const doc = { profile: {} };
// await Model.create(doc);
// // Saved result → { profile: {} }
