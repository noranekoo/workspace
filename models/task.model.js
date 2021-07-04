const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: String,
    p_id: {type: Schema.Types.ObjectId, ref: 'Project'},
    plan_time: Number,
    total_time: Number,
    task_master: {type: Schema.Types.ObjectId, ref: 'User'},
    performer: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps:true})

module.exports = mongoose.model('Task', schema)