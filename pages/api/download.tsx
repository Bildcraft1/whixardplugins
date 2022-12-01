import type { NextRequest } from 'next/server'

export default function handler(req, res) {
    const { pid } = req.query
    res.end(`Post: ${pid}`)
}