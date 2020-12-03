const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect("mongodb+srv://sheikh-spear:hjk@cluster0.sgf82.mongodb.net/CashManager?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};