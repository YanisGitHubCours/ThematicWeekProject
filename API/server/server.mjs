import contactRouter from './routes/contact/contact.mjs'
import listecontactRouter from './routes/liste-contact/liste-contact.mjs'
import messageRouter from './routes/message/message.mjs'
import statusmessageRouter from './routes/status-message/status-message.mjs'
import staticRouter from './routes/static/static.mjs'
import listRouter from './routes/list/list.mjs'
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

app.use(contactRouter)
app.use(listecontactRouter)
app.use(messageRouter)
app.use(statusmessageRouter)
app.use(staticRouter)
app.use(listRouter)
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(port, () => {
    console.log(`server listen at ${port}`)
})
