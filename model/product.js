var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var productSchema = new mongoose.Schema({
	name: String,
	description: String,
	status: Boolean,
	createDate: { type: Date, default: Date.now },
	lastUpdateDate: { type: Date, default: Date.now },
	lastUpdateBy: String,
	category_id: Number,
	price: Number,
	priceCommission: Number,
	discount: Number,
	view: Number,
	image: String,
	unit: String,
	imageList: Array,
	model: String
},{collection : "product"});
module.exports = mongoose.model('product', productSchema);