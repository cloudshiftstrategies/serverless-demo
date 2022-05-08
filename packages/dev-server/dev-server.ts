const express = require('express')
import {helloWorldHandler, tableHandler } from "@serverless-demo/api"
import {apiEvent} from "./resources";

const app = express()

app.use(express.text())

app.use('/api/hello-world', async (req: any, res: any) => {
    res.send(await helloWorldHandler(apiEvent))
})
app.use('/api/table', async (req: any, res: any) => {
    res.send(await tableHandler(apiEvent))
})

app.listen(3000, () => console.log('listening on port: 3000'))