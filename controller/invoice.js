const express = require("express");
const Invoice = require("../model/Invoice");
const Customer = require("../model/customer");

// create new invoice

const newInvoice = async (req, res) => {
  const { customerId, invoiceDate, stateOfSupply, items } = req.body;
  const customer = await Customer.findById(customerId);
  if (!customer) {
    return res.status(404).send({ message: "Customer not found" });
  }

  // Calculate the total amounts and taxes
  let totalAmount = 0;
  let totalTax = 0;

  items.forEach((item) => {
    const itemTotal = item.quantity * item.unitPrice;
    const itemDiscount = itemTotal * (item.discountPercentage / 100);
    const itemTax = (itemTotal - itemDiscount) * (item.taxPercentage / 100);

    totalAmount += itemTotal - itemDiscount;
    totalTax += itemTax;
  });

  const roundOff =
    Math.round((totalAmount + totalTax) * 100) / 100 - (totalAmount + totalTax); // Adjust for rounding
  const finalAmount = totalAmount + totalTax + roundOff;

  // Auto-generate invoice number (simple example, can be improved)
  const invoiceNumber = `INV-${Date.now()}`;

  // Create a new invoice
  const newInvoice = await Invoice.create({
    customer: customerId,
    invoiceNumber,
    invoiceDate,
    stateOfSupply,
    items,
    totalAmount,
    totalTax,
    roundOff,
    finalAmount,
  });

  // Send the created invoice as a response
  res.status(201).send(newInvoice);
};


module.exports={newInvoice}