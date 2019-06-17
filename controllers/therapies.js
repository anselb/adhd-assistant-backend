const Therapy = require('../models/therapy')

module.exports = (app) => {
  // Get index of all therapies
  app.get('/therapies/', function(req, res) {
    Therapy
      .find({})
      .then((therapies) => {
        res.json(therapy)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Get individual therapy by id
  app.get('/therapies/:id', function(req, res) {
    Therapy
      .findById(req.params.id)
      .then((therapy) => {
        res.json(therapy)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Save therapy to database
  app.post('/therapies/', function (req, res) {
    Therapy
      .create(req.body)
      .then((therapy) => {
        res.send(`Successfully added therapy to database: ${therapy}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Update existing therapy
  app.put('/therapies/:id', function (req, res) {
    Therapy
      .findByIdAndUpdate(req.params.id, req.body)
      .then((therapy) => {
        res.send(`Successfully updated therapy: ${therapy}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Delete therapy
  app.delete('/therapies/:id', function (req, res) {
    Therapy
      .findByIdAndRemove(req.params.id)
      .then((therapy) => {
        res.send(`Successfully removed therapy: ${therapy}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })
}
