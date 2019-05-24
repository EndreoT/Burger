import {Burger} from './models/model'
import {config} from './config/connectionConfig'

const burger = new Burger();

burger.selectAll().then(item => {
  console.log(item)
})

// burger.insertOne('newBurger', true).then(item => {
//   console.log(item)
// })

// burger.updateOne(4, "ok", false).then(item => {
//   console.log(item)
// })

// burger.deleteOne(4).then(item => {
//   console.log(item)
// })