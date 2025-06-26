import { app } from './app'
import { env } from './env'

app
  .listen({
    port: Number(process.env.PORT) || env.PORT,
  })
  .then(() => {
    console.log(`HTTP Server Running! ${process.env.PORT || env.PORT}`)
  })
