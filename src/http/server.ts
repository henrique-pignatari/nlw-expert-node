import fastify from "fastify"
import { createPolll } from "./routes/create-poll"
import { getPoll } from "./routes/get-poll"

const app = fastify()

app.register(createPolll)
app.register(getPoll)

app.listen({port: 3333}).then(() => {
    console.log("HTTP server running!")
})