
const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    invoiceNumber: { type: String, required: true },  // You can auto-generate this
    invoiceDate: { type: Date, required: true },
    stateOfSupply: { type: String, required: true },
    items: [{
        itemName: { type: String, required: true },
        quantity: { type: Number, required: true },
        unitPrice: { type: Number, required: true },
        discountPercentage: { type: Number, default: 0 },
        taxPercentage: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    totalTax: { type: Number, required: true },
    roundOff: { type: Number, default: 0 },
    finalAmount: { type: Number, required: true }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
