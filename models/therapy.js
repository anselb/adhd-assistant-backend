const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TherapySchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  name: { type: String, required: true },
  status: { type: String, enum: ['Currently Trying', 'Have Tried', 'Have Not Tried'] },
  referenceDocument: { type: String },
  timesDone: { type: Number, default: 0 },
  whenToDoNotes: { type: String },
  generalNotes: { type: String }
})

TherapySchema.pre('save', function(next) {
  // Set createdAt and updatedAt times
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})

module.exports = mongoose.model('Therapy', TherapySchema)
