const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const schema = new Schema({
    user_name: {type: String, required: true, unique: true},
    password: {type: String, required: true, min: 6},
    name: {type: Map, of: String},
    bdt: {type: Number},
    email: {type: String, unique: true, lowercase: true, validate: val => {
        if(!validator.isEmail(val)) 
        throw new Error({error: 'Email is invalid'})
        }
    },
    fail_login_times:{type: Number, default: 0}
}, {timestamps: true})

module.exports = mongoose.model('User', schema)