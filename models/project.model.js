const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contributor = new Schema({
    u_id: {type: Schema.Types.ObjectId, ref: 'User'}
})

const schema = new Schema({
    name: {type: String, required: true},
    p_type: String,
    plan_time: Number,
    total_time: Number,
    p_manager: {type: Schema.Types.ObjectId, ref:'User'},
    contributors: [contributor]

}, {timestamps:true})


module.exports = mongoose.model('Project', schema)