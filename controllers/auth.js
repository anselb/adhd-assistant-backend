const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = (app) => {
  // Create user
  app.post('/sign-up', (req, res) => {
    const user = new User(req.body)

    user.save().then((user) => {
      var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" })
      res.cookie('nToken', token, { maxAge: 900000, httpOnly: true })
      res.status(200).send({ message: 'Successful sign up' })
    }).catch((err) => {
      console.log(err.message)
      return res.status(400).send({ err: err })
    })
  })

  // Login
  app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    User.findOne({ username }, 'username password').then((user) => {
      if (!user) {
        return res.status(401).send({ message: 'Wrong Username or Password' })
      }
      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
          console.log(password);
          return res.status(401).send({ message: 'Wrong Username or Password' })
        }
        const token = jwt.sign(
          { _id: user._id, username: user.username }, process.env.SECRET,
          { expiresIn: "60 days" }
        )
        res.cookie('nToken', token, { maxAge: 900000, httpOnly: true })
        res.status(200).send({ message: 'Successful login' })
      })
    }).catch((err) => {
      console.log(err)
    })
  })

  // Logout
  app.get('/logout', (req, res) => {
    res.clearCookie('nToken')
    res.status(200).send({ message: 'Successful logout' })
  })
}
