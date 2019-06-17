const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StoryComponent = require('./storyComponent')

const StorySchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  title: { type: String, required: true },
  description: { type: String },
  leadingStoryComponents: [{ type: Schema.Types.ObjectId, ref: 'StoryComponentSchema' }]
})

StorySchema.pre('save', function(next) {
  // Set createdAt and updatedAt times
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})

module.exports = mongoose.model('Story', StorySchema)
