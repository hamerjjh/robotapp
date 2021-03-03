require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { RobotModel } = require('./schema')

const destroyer = new RobotModel({
  name: 'Destroyer',
  color: "red",
  attack: 13,
  defense: 5
})
const eliminator = new RobotModel({
    name: 'Eliminator',
    color: "blue",
    attack: 9,
    defense: 8
})
const speedy = new RobotModel({
    name: 'Speedy',
    color: "yellow",
    attack: 6,
    defense: 10
})
const soldier = new RobotModel({
    name: 'Soldier',
    color: "orange",
    attack: 12,
    defense: 4
})
const butcher = new RobotModel({
    name: 'Butcher',
    color: "green",
    attack: 7,
    defense: 11
})


RobotModel.remove({})
  .then(() => eliminator.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())