const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MedicationSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  name: { type: String, required: true },
  status: { type: String, enum: ['Currently Trying', 'Have Tried', 'Have Not Tried'] },
  sideEffects: { type: String },
  referenceDocument: { type: String, required: true },
  timesTaken: { type: Number, default: 0 },
  intakeNotes: { type: String },
  generalNotes: { type: String }
})

MedicationSchema.pre('save', function(next) {
  // Set createdAt and updatedAt times
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})

module.exports = mongoose.model('Medication', MedicationSchema)
