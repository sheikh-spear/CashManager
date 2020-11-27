var mongoose = require('mongoose')

var NotificationSchema = new mongoose.Schema({
  from: String,
  to: String,
  eventid: mongoose.Schema.Types.ObjectID,
  read: {type: Boolean, default: false},
  date: { type: Date, default: Date.now },
  message: String,
  reference: mongoose.Schema.Types.ObjectID,
  participationDemand: {type: Boolean, default: false},
  decision: {type: Boolean, default: false}
})

findOrCreate = require('mongoose-findorcreate')
NotificationSchema.plugin(findOrCreate)

module.exports = mongoose.model('Notification', NotificationSchema)