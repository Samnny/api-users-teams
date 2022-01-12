const express = require('express')
const app = express()
const router = require('./src/routes/index')
const database = require('./db')
const Teams = require('./src/models/teams')
const Users = require('./src/models/users')
const port = 3333

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

// const result = async () => {
//   try {
//     await database.sync()
//     await Teams.create({
//       name: 'TI',
//       active: 1,
//       updatedAt: new Date(),
//       createdAt: new Date()
//     })
//     await Users.create({
//       name: 'Kauã',
//       active: 1,
//       password: '123456',
//       login: 'kauanunnes',
//       team_id: '1',
//       updatedAt: new Date(),
//       createdAt: new Date()
//     })

//   } catch (error) {
//     console.log(error)
//   }
// }
// result()

app.listen(port, () => {
  console.log(`Your server is running on http://localhost:${port}`);
})