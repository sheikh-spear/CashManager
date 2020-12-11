const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/db');
const User = db.User;
const log = require("../helpers/logger.js");
const simpleOAuth2Facebook = require('simple-oauth2-facebook');

const facebook = simpleOAuth2Facebook.create({
  clientId: "235762640969623",
  clientSecret: "840a756c772ac86002beb98709aa0cc8",
  callbackURL: 'http://localhost:4000/facebook/facebookCallbackURL'
});

module.exports = {
    getFacebookAuthUrl
};

async function getFacebookAuthUrl(next){
    console.log(facebook.authorize());
}