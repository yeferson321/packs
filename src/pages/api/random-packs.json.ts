export const prerender = false;
import type { APIRoute } from "astro";
import type { Packs } from "../../utils/types/definitions";
import { packs } from "../../utils/data/data";

export const GET: APIRoute = ({ request }) => {
    const { url } = request;
    const urlObject = new URL(url);
    const limit: number = parseInt(urlObject.searchParams.get("limit") || "12");

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

    const total = randomPacks.length;
    const totalPacks = packs.length;

    return new Response(
        JSON.stringify({
                status: "success",
                data: {
                    stats: { total: total, totalPacks: totalPacks },
                    packs: randomPacks,
                },
            }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
};
