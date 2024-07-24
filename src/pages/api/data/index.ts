export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const local = window.localStorage.getItem("storePacks") 

  return new Response(JSON.stringify({ message: "¡Esto es un GET!", local: local}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}