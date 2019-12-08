const express = require('express')
const app = express()

let persons = [
  {
    id: 1,
    name: 'Poppy',
    number: '420-1337'
  },
  {
    id: 2,
    name: 'Oppimisen viisas alpakki',
    number: '987-744731'
  },
  {
    id: 3,
    name: 'Urhea retkialpakki',
    number: '547-15-P'
  },
  {
    id: 4,
    name: 'Ozzy',
    number: '022-022-505'
  }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send('<p>Phonebook has info for ' + persons.length + ' people</p>' + new Date())
})

app.get('/api/persons/:id', (request, response) => {
  const person = persons.find(person => person.id === Number(request.params.id))
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})