const app = require('express')()
const router = require('./src/routes/index')
const port = 3333

app.use('/', router)

app.listen(port, () => {
    console.log(`Seu servidor esta rodando no http://localhost:${port}`);
})

var name = 'samay'