const express = require('express')
const cors = require('cors')

const mockToken =
  '3713d4765eb7a9a03674bd391d0ca708e48e24e2c014ba723fc24ebff1de1fd1'
const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@doe.com',
}

const app = express()

app.use(cors())
app.use(express.json())

app.get('/me', (req, res) => {
  const headers = req.headers.authorization

  const token = headers && headers.split(' ')[1] // Bearer <TOKEN>

  if (token === mockToken) {
    return res.json({
      user: mockUser,
    })
  } else {
    return res.status(401).json({ message: 'Invalid token' })
  }
})
app.post('/login', (req, res) => {
  const { email, password } = req.body

  if (email === 'admin@admin.com' && password === '123456') {
    return res.json({
      user: mockUser,
      token: mockToken,
    })
  } else {
    return res.status(401).json({ message: 'Invalid password' })
  }
})

module.exports = {
  path: '/api',
  handler: app,
}