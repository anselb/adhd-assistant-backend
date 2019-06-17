const Story = require('../models/story')

module.exports = (app) => {
  // Get index of all stories
  app.get('/stories/', function(req, res) {
    Story
      .find({})
      .then((stories) => {
        res.json(story)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Get individual story by id
  app.get('/stories/:id', function(req, res) {
    Story
      .findById(req.params.id)
      .then((story) => {
        res.json(story)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Save story to database
  app.post('/stories/', function (req, res) {
    Story
      .create(req.body)
      .then((story) => {
        res.send(`Successfully added story to database: ${story}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Update existing story
  app.put('/stories/:id', function (req, res) {
    Story
      .findByIdAndUpdate(req.params.id, req.body)
      .then((story) => {
        res.send(`Successfully updated story: ${story}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Delete story
  app.delete('/stories/:id', function (req, res) {
    Story
      .findByIdAndRemove(req.params.id)
      .then((story) => {
        res.send(`Successfully removed story: ${story}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })
}
