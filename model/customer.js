
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    balance: { type: Number, default: 0 },
    billingAddress: { type: String, required: true },
});

module.exports = mongoose.model('Customer', CustomerSchema);
