const dotenv = require('dotenv');

const User = require('../models/user');
const Product = require('../models/product');
const mockUsers = require('../mock/users');
const mockProducts = require('../mock/products');
const connectDatabase = require('../db/database');

dotenv.config();

const seedProducts = async () => {
    try {
        await connectDatabase(process.env.DB_LOCAL_URL);

        await User.deleteMany();
        console.log('Users deleted');
        await Product.deleteMany();
        console.log('Products deleted');

        const user = await User.create(mockUsers[0]);
        console.log('Users added');
        await Product.insertMany(mockProducts.map((product) => ({ ...product, user: user._id })));
        console.log('Products added');
    } catch (error) {
        console.log(error);
    } finally {
        process.exit();
    }
};

seedProducts();
