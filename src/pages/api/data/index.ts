// Salidas: /builtwith.json

/* export async function GET({params, request}) {
    return new Response(
        JSON.stringify({
           url: 'https://astro.build/'
        })
    )
}
 */

/* 
import type { APIRoute } from 'astro';

const usernames = ["Sarah", "Chris", "Dan", "Yan", "Elian"]

export const GET: APIRoute = ({ params, request }) => {
  const id = params.id;
  return new Response(
    JSON.stringify({
      name: usernames[id]
    })
  )
} */

/* import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {...} */



import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify({ message: "¡Esto es un GET!"}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}