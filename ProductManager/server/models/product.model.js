const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: Text}
}, { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);

