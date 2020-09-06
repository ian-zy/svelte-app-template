import type { NowRequest, NowResponse } from '@vercel/node'
import { app } from '../server'

export default async (request: NowRequest, response: NowResponse) => {
  await app.ready()
  app.server.emit('request', request, response)
}
