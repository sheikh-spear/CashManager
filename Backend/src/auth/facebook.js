var passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy
var User = require('../models/User')

passport.use(
  new FacebookStrategy(
    {
      clientID: '625568111474840',
      clientSecret: '0578e0414f78a708c08de1c95cfb8049',
      callbackURL: 'https://localhost:3000/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'picture.type(large)', 'email']
    },
    function (accessToken, refreshToken, profile, done) {
      if (profile._json.picture !== undefined) {
        User.findOrCreate(
          { userid: profile.id },
          {
            name: profile.displayName,
            userid: profile.id,
            email: profile.email,
            picture: profile._json.picture.data.url,
            grade: 5,
            joinedEvents: [],
            createdEvents: [],
            description: ''
          },
          function (err, user) {
            if (err) {
              return done(err)
            }
            done(null, user)
          }
        )
      } else {
        User.findOrCreate(
          { userid: profile.id },
          {
            name: profile.displayName,
            userid: profile.id,
            email: profile.email,
            picture: undefined,
            grade: -1,
            joinedEvents: [],
            createdEvents: [],
            description: ''
          },
          function (err, user) {
            if (err) {
              return done(err)
            }
            done(null, user)
          }
        )
      }
    }
  )
)

module.exports = passport
