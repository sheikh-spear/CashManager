var mongoose = require('mongoose')

var EventSchema = new mongoose.Schema({
  owner: String,
  title: String,
  type: String,
  placeType: String,
  description: String,
  start: Date,
  end: Date,
  musicType: String,
  maxAllowed: { type: Number, min: 0, max: 1000},
  currentParticipants: { type: Number, min: 0, max: 1000 },
  pictures: [String],
  latitude: mongoose.Schema.Types.Decimal128,
  longitude: mongoose.Schema.Types.Decimal128,
  additionalInfos: String,
  manualValidation: Boolean,
  participatingUsers: [String]
})

findOrCreate = require('mongoose-findorcreate')
EventSchema.plugin(findOrCreate)

module.exports = mongoose.model('Event', EventSchema)
