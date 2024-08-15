export const prerender = false;
import type { APIRoute } from "astro";
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
    const view: string = urlParams.searchParams.get("view") || "";

    if (!view) {
        return new Response(
            JSON.stringify({
                status: "fail",
                type: "Validation Error",
                message: "The VIEW parameter is missing. Please include this parameter in your request.",
            }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    };

    const filteredPacks = packs.find(pack => pack.id === view);

    if (!filteredPacks) {
        return new Response(
            JSON.stringify({
                status: "success",
                data: {
                    pack: {},
                    related: []
                },
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    };

    const related = packs.filter(pack => pack.categories.some(category => filteredPacks?.categories && 
            filteredPacks.categories.some(filteredCategory =>
                category.includes(filteredCategory)
            )
        )
    ).slice(0, 4); // Limita el resultado a los primeros 4 elementos
    
    return new Response(
        JSON.stringify({
            status: "success",
            data: {
                pack: filteredPacks || {},
                related: related
            },
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
};
