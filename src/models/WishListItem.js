// models/WishListItem.js
const mongoose = require('mongoose');

const wishListItemSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nombre del ítem en la wish list
    
});

const WishListItem = mongoose.model('WishListItem', wishListItemSchema);
module.exports = WishListItem;
