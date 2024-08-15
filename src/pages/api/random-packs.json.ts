export const prerender = false;
import type { APIRoute } from "astro";
import type { Packs } from "../../utils/types/definitions";
import { packs } from "../../utils/data/data";

export const GET: APIRoute = ({ request }) => {
    const token = request.headers.get("X-Auth-Token");

    if (token == null || token !== import.meta.env.SECRET_TOKEN) {
        return new Response(
            JSON.stringify({
                status: "fail",
                type: "Authorization Error",
                message: "You do not have permission to access this resource.",
            }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }; 
    
    const urlParams = new URL(request.url);
    const limit: number = parseInt(urlParams.searchParams.get("limit") || "12");

    const randomPacks: Packs[] = [];
    let len = packs.length;
    const taken = new Array(len);

    while (randomPacks.length < limit) {
        const x = Math.floor(Math.random() * len);
        const pack = packs[x in taken ? taken[x] : x];
        if (pack !== undefined) {
            randomPacks.push(pack);
        };
        taken[x] = --len in taken ? taken[len] : len;
    };

    const totalPacks = randomPacks.length;

    return new Response(
        JSON.stringify({
            status: "success",
            data: {
                stats: { totalPacks: totalPacks },
                packs: randomPacks,
            },
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
};
