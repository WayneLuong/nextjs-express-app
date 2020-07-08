const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const server = next({ dev })
const handle = server.getRequestHandler()
const PORT = process.env.PORT || 5000

server.prepare().then(() => {
    const app = express()

    app.get('/api', (req, res) => {
        res.json({ test: 'API retrieved from server.js', propTest: 'API for prop' })
    })

    app.get('*', (req, res) => {
        return handle(req, res)
    })

    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
})

