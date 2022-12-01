import type { NextRequest } from 'next/server'

export const config = {
    runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest, res: NextRequest) {
    const { pid } = req.query
    res.end(`Post: ${pid}`)
}