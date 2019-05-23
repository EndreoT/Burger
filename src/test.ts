import {Burger} from './models/model'
import {config} from './config/connectionConfig'

const burger = new Burger(config);

// burger.selectAll().then(item => {
//   console.log(item)
// })

burger.insertOne('newBurger', true).then(item => {
  console.log(item)
})