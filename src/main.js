const express = require('express')

// A simple config express

const app = express()

const port = process.env.PORT || 3000

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))

app.get('*', (req, res) => {
    res.sendFile('index.html', { root : baseDir })
})

app.listen(port, () => {
    console.log(`Server on ${port}`)
})