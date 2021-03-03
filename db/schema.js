const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RobotsSchema = new Schema({
    name: {
        type: String,
      
    },
    color: {
        type: String,
    },
    attack: {
        type: Number,
      
    },
    defense: {
        type: Number,
    }
})



const RobotModel = mongoose.model('Robot', RobotsSchema)


module.exports = {
    RobotModel: RobotModel
}