

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ message: "¡Esto es un GET!"}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}