const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

const connectOrdersDatabase = (uri) =>
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then((con) => {
            console.log(`DB started in: ${con.connection.host}`);
        });

const connectUsersDatabase = async (uri) => {
    const sequelize = new Sequelize(uri);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = {
    connectOrdersDatabase,
    connectUsersDatabase,
};
