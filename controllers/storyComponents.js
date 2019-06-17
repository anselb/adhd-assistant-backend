const Story = require('../models/story')
const StoryComponent = require('../models/storyComponent')

module.exports = (app) => {
  // Get index of all story components
  app.get('/storyComponents/', function(req, res) {
    StoryComponent
      .find({})
      .then((storyComponents) => {
        res.json(storyComponents)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Get individual story component by id
  app.get('/storyComponents/:id', function(req, res) {
    StoryComponent
      .findById(req.params.id)
      .then((storyComponent) => {
        res.json(storyComponent)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Save leading story component to database
  app.post('stories/:id/storyComponents/', function (req, res) {
    StoryComponent
      .create(req.body)
      .then((storyComponent) => {
        Story
          .findById(req.params.id)
          .then((story) => {
            story.leadingStoryComponents.push(storyComponent)
            story.save()
            res.send(`Successfully added story component to database: ${storyComponent}`)
          })
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Save following story component to database
  app.post('storyComponents/:id/storyComponents/', function (req, res) {
    StoryComponent
      .create(req.body)
      .then((storyComponent) => {
        StoryComponent
          .findById(req.params.id)
          .then((previousStoryComponent) => {
            previousStoryComponent.nextStoryComponents.push(storyComponent)
            previousStoryComponent.save()
            res.send(`Successfully added story component to database: ${storyComponent}`)
          })
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Update existing story component
  app.put('/storyComponents/:id', function (req, res) {
    StoryComponent
      .findByIdAndUpdate(req.params.id, req.body)
      .then((storyComponent) => {
        res.send(`Successfully updated story component: ${storyComponent}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Delete story component
  app.delete('/storyComponents/:id', function (req, res) {
    StoryComponent
      .findByIdAndRemove(req.params.id)
      .then((storyComponent) => {
        res.send(`Successfully removed story component: ${storyComponent}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })
}
