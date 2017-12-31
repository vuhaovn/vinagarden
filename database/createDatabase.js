var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vinagarden');
mongoose.Promise = global.Promise;

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
});

var categorySchema = new mongoose.Schema({
	id: Number,
	name: String,
	description: String,
	status: Boolean,
	createDate: { type: Date, default: Date.now },
	lastUpdateDate: { type: Date, default: Date.now },
	lastUpdateBy: String,
	parentId: Number
});

var storeSchema = new mongoose.Schema({
	id: Number,
	name: String,
	ownerName: String,
	phone: Number,
	address: String,
	status: Boolean
});

var product = mongoose.model("product", productSchema);
var category = mongoose.model("category", categorySchema);
var store = mongoose.model("store", storeSchema);

// product.create([
// 	{
// 		name: "San pham 1",
// 		description: "Mo ta san pham 1",
// 		status: true,
// 		createDate: "12/10/1990",
// 		lastUpdateDate: "12/10/1992",
// 		lastUpdateBy: "Superman",
// 		category_id: 1,
// 		price: 30000,
// 		priceCommission: 10,
// 		discount: 50,
// 		view: 30,
// 		image: "sanpham1.png",
// 		unit: "kg",
// 		imageList: ["1.png","2.png","3.png"],
// 		model: "SP1"
// 	},
// 	{
// 		name: "San pham 2",
// 		description: "Mo ta san pham 2",
// 		status: true,
// 		createDate: "12/11/1990",
// 		lastUpdateDate: "12/11/1992",
// 		lastUpdateBy: "Superman",
// 		category_id: 1,
// 		price: 40000,
// 		priceCommission: 5,
// 		discount: 20,
// 		view: 32,
// 		image: "sanpham2.png",
// 		unit: "kg",
// 		imageList: ["a1.png","a2.png","a3.png"],
// 		model: "SP2"
// 	}
// ])

category.create({
	id: 1,
	name: "Category 1",
	description: "Description of category 1",
	status: true,
	createDate: "11/10/1990",
	lastUpdateDate: "11/10/1991",
	lastUpdateBy: "Batman",
	parentId: 1
});

store.create({
	id: 1,
	name: "Phong Vu Computer",
	ownerName: "Mr Peter",
	phone: 0123456789,
	address: "Nguyen Thi Minh Khai, Quan 1, TPHCM",
	status: true
})
