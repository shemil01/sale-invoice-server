const express = require('express')
const invoiceRout = express.Router()
const controller = require('../controller/invoice')
const {tryCatch} = require('../utils/tryCatch')


invoiceRout.post('/create-invoice',tryCatch(controller.newInvoice))      

module.exports =  invoiceRout