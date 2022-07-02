const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

// const res = require('express/lib/response')

// create a html page for about with 'about' title

const app = express()
const publicDirectory = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectory, { extensions: ['html'] }))

app.get('', (req, res) => {
  res.send('<h1>Weather<h1>')
})

app.get('/help', (req, res) => {
  res.send([{
    name: 'Andrew',
    age: 27
  }, { name: 'Sarah' }])
})

app.get('/about', (req, res) => {
  console.log(req.url)
  res.send('<h1>ABOUT<h1>')
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Zimbabwe'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
