const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const f = require("util").format;
const log = require("../debug/logger.js");

const DbUrl = "mongodb+srv://sheikh-spear:hjk@cluster0-sgf82.mongodb.net/test?retryWrites=true&w=majority"

async function findUserByName(user, next) {
  return MongoClient.connect(DbUrl, function(error, db) {
    db.db("DevISA").collection("users").find(function(error, results) {
      if (error) {
        log(error, 3);
        throw error;
      }
      let r = undefined;
      results.forEach(element => {
        if (element.user === user) {
          r = element;
          next(r);
        }
      });
    });
  });
}

async function findUserByID(id, next) {
  return MongoClient.connect(DbUrl, function(error, db) {
    db
      .db("DevISA")
      .collection("users")
      .findOne({ _id: new ObjectID(id) }, function(error, results) {
        if (error) {
          log(error, 3);
          throw error;
        }
        log("Search returned:", 1);
        console.log(results);
        return next(results);
      });
  });
}

module.exports = {
    findUserByID,
    findUserByName
}