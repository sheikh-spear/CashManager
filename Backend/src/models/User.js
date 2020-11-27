var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  name: String,
  userid: String,
  updated_at: { type: Date, default: Date.now },
  email: String,
  description: String,
  picture: String,
  grades: [Number],
  eventsAskedToJoin: [String],
  ratedUsers: [String],
  joinedEvents: [mongoose.Schema.Types.ObjectID],
  createdEvents: [mongoose.Schema.Types.ObjectID],
  stripeAccountID: String,
  completedStripeAccount: {type: Boolean, default: false}
})

findOrCreate = require('mongoose-findorcreate')
UserSchema.plugin(findOrCreate)

module.exports = mongoose.model('User', UserSchema)
