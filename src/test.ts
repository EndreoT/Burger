import {Burger} from './models/model'
import {config} from './config/connectionConfig'
import {convertStringToBoolean} from './utils/utils';

const burger = new Burger();

// burger.selectAll().then(item => {
//   console.log(item)
// })

// burger.insertOne('newBurger', true).then(item => {
//   console.log(item)
// })

// burger.updateOne(5, "ok", false).then(item => {
//   console.log(item)
// })

// burger.deleteOne(4).then(item => {
//   console.log(item)
// })



console.log(convertStringToBoolean('1'))

console.log(convertStringToBoolean('-1'))
console.log(convertStringToBoolean('0'))
// console.log(JSON.parse('adf'))
console.log(convertStringToBoolean('34'))
console.log(convertStringToBoolean('3sadf'))
console.log(convertStringToBoolean('true'))
console.log(convertStringToBoolean('false'))