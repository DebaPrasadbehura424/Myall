//here we define schemas of user ar any other data that schema looks like object 

import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please fulfill username"],
        unique: [true, "Username exist "]
    },
    password: {
        type: String,
        required: [true, "Please fulfill password"],
        unique: false
    },
    email: {
        type: String,
        required: [true, "Please fulfill email"],
        unique: true
    },
    firstname: { type: String },
    lastname: { type: String },
    mobile: { type: String },
    address: { type: String },
    profile: { type: String },
});
const dataModel = mongoose.model('UserFile', UserSchema)

export default dataModel;







