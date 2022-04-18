//import router from './routes.mjs'
import express from 'express'
import bodyparser from 'body-parser'
import morgan from 'morgan'
//import swaggerUI from 'swagger-ui-express'
//import docs from '../docs/index.mjs'
import env from 'dotenv'

env.config()
const port = process.env.PORT
const app = express()

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(morgan('tiny'))
//app.use(router)
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(port, () => {
    console.log(`server listen at ${port}`)
})
