const express = require('express')
const customerRout = express.Router()
const  controller = require('../controller/customer')
const {tryCatch} = require('../utils/tryCatch')


customerRout.post('/add-customer',tryCatch(controller.addNewCustomer))
customerRout.get('/all-customers',tryCatch(controller.getCustomers))


module.exports = customerRout