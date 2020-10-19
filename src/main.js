const express = require('express')

const app = express()

const port = 3000 || process.env.port

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))

app.get('*', (req, res) => {
    res.sendFile('index.html', { root : baseDir })
})

app.listen(port, () => {
    console.log(`Server on ${port}`)
})