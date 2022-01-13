const express = require("express")

const app = express()

app.use(express.json())

const users = ['Bruno', 'Jaciane','Luiz Fernando']

app.get('/users', (request, response) => {
  return response.json(users)
})

app.get('/users/:index', (request, response) => {
  const { index } = request.params

  return response.json(users[index])
})

app.post('/users', (request, response) => {
  const { name } = request.body

  users.push(name)

  return response.json(users)
})

app.put('/users/:index', (request, response) => {
  const { index } = request.params
  const { name } = request.body

  users[index] = name

  return response.json(name)
})

app.delete('/users/:index', (request, response) => {
  const { index } = request.params

  users.splice(index, 1)

  return response.send()
})


app.listen(3333);


