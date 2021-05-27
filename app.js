const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generateTalk')

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('handlebars', exphbs({
  defaultLayout: 'main', helpers: {
    checked: function (person, currentValue) {
      if (person === currentValue) {
        return 'checked'
      } else {
        return ''
      }
    }
  }
}))

app.set('view engine', 'handlebars')

//need to add the code if want to link the style.css
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  currentValue = req.body.person
  const talk = generateTalk(req.body.person)
  res.render('index', { talk: talk, currentValue })

})
app.listen(port, () => {
  console.log('伺服器已開啟' + ` localhost:${port}`)
})