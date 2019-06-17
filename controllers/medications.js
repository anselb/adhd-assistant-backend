const Medication = require('../models/medication')

module.exports = (app) => {
  // Get index of all medications
  app.get('/medications/', function(req, res) {
    Medication
      .find({})
      .then((medications) => {
        res.json(medication)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Get individual medication by id
  app.get('/medications/:id', function(req, res) {
    Medication
      .findById(req.params.id)
      .then((medication) => {
        res.json(medication)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Save medication to database
  app.post('/medications/', function (req, res) {
    Medication
      .create(req.body)
      .then((medication) => {
        res.send(`Successfully added medication to database: ${medication}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Update existing medication
  app.put('/medications/:id', function (req, res) {
    Medication
      .findByIdAndUpdate(req.params.id, req.body)
      .then((medication) => {
        res.send(`Successfully updated medication: ${medication}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })

  // Delete medication
  app.delete('/medications/:id', function (req, res) {
    Medication
      .findByIdAndRemove(req.params.id)
      .then((medication) => {
        res.send(`Successfully removed medication: ${medication}`)
      }).catch((err) => {
        console.log(err.message)
      })
  })
}
