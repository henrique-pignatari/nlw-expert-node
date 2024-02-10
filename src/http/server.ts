import fastify from "fastify"
import { createPolll } from "./routes/create-poll"

const app = fastify()

app.register(createPolll)

app.listen({port: 3333}).then(() => {
    console.log("HTTP server running!")
})