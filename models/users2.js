const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize();

const User = sequelize.define(
    'User',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },

        // name: {
        //     type: String,
        //     required: [true, 'Please enter your name'],
        //     maxLength: [30, 'Your name cannot exceed 30 character'],
        // },
        // email: {
        //     type: String,
        //     required: [true, 'Please enter your email'],
        //     unique: true,
        //     validate: [validator.isEmail, 'Please enter valid email address'],
        // },
        // password: {
        //     type: String,
        //     required: [true, 'Please enter your password'],
        //     minlength: [6, 'Your password must be longer than 6 character'],
        //     select: false,
        // },
        // avatar: {
        //     public_id: {
        //         type: String,
        //         required: true,
        //     },
        //     url: {
        //         type: String,
        //         required: true,
        //     },
        // },
        // role: {
        //     type: String,
        //     default: roles.user,
        // },
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        // },
        // resetPasswordToken: {
        //     type: String,
        // },
        // resetPasswordExpire: {
        //     type: Date,
        // },
    },
    {},
);

console.log(User === sequelize.models.User);
