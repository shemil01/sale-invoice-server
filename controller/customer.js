const express = require('express')
const Customer = require('../model/customer')

// create a new customer
const addNewCustomer = async(req,res) => {
    const {companyName,phoneNumber,billingAddress} = req.body;
    const isExist = await Customer.findOne({companyName})

    if(isExist){
        return res.status(409).send({ message: 'Customer already exists' });
    }
    const newCustomer = await Customer.create({
        companyName,
        billingAddress,
        phoneNumber
    })
    res.status(201).send(newCustomer);
}

//get all customers

const getCustomers = async(req,res)=>{
    const customer = await Customer.find()
    res.send(customer)
}


module.exports = {addNewCustomer,getCustomers}