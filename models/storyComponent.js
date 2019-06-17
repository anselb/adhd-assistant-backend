const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StoryComponentSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  description: { type: String, required: true },
  nextStoryComponents: [{ type: Schema.Types.ObjectId, ref: 'StoryComponentSchema' }]
})

StoryComponentSchema.pre('save', function(next) {
  // Set createdAt and updatedAt times
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})

module.exports = mongoose.model('StoryComponent', StoryComponentSchema)
