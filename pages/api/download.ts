import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const plugin = searchParams.get('plugin')
  if(plugin == "flamecord") {
    return new Response("https://cdn.dragoncraft.it/FlameCord.jar")
  } else {
    return new Response("Invalid Plugin")
  }
}
