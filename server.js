// Setting up config file
// TODO: use another file for production, not env vars
if (process.env.NODE_ENV !== 'PRODUCTION') {
    const dotenv = require('dotenv');
    dotenv.config();
}

// Connecting to DBs
const { connectOrdersDatabase } = require('./db/database');
// const { connectUsersDatabase } = require('./db/database');
if (process.env.NODE_ENV === 'PRODUCTION') {
    connectOrdersDatabase(process.env.ORDERS_DB_URI);
    // connectUsersDatabase(process.env.USERS_DB_URI);
} else {
    connectOrdersDatabase(process.env.ORDERS_DB_LOCAL_URL);
    // connectUsersDatabase(process.env.USERS_DB_LOCAL_URL);
}

// Setting up cloudinary
const setUpCloudinary = require('./services/cloudinary');
setUpCloudinary();

// Start the server
const app = require('./app');
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle errors
const { handleErrors } = require('./utils/errorHandler');
handleErrors(server);
