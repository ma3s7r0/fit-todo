import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cors from 'cors'
import * as path from 'path'
import todoRoutes from './routes/TodoRoutes'

// loads the config from the .env file
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../.env' })

createConnection()
    .then(async (connection) => {
        // create express app
        const app = express()
        app.use(cors())
        app.use(helmet())
        app.use(bodyParser.json())

        app.use('/todos', todoRoutes)

        // serving the actual production build of the frontend under /site
        app.use(express.static(path.join(__dirname, '../../frontend/build')))
        app.get('/site', function (req, res) {
            res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'))
        })

        // starting express server
        app.listen(process.env.REACT_APP_REST_PORT)

        console.log(
            `Express server has started on port ${process.env.REACT_APP_REST_PORT}. Open http://${process.env.REACT_APP_REST_HOST}:${process.env.REACT_APP_REST_PORT}/site to see results. The REST API is under http://${process.env.REACT_APP_REST_HOST}:${process.env.REACT_APP_REST_PORT}/todos`,
        )
    })
    .catch((error) => console.log(error))
