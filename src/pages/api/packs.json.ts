export const prerender = false;
import type { APIRoute } from "astro";
import { packs } from "../../utils/data/data";
import type { FavoriteIds } from "../../utils/types/definitions";

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
    const offset: number = parseInt(urlParams.searchParams.get("offset") || "0");
    const search: string = urlParams.searchParams.get("search") || "";
    const favorites: string = urlParams.searchParams.get("favorites") || "";

    if (search) {
        const lowerCaseSearch = search.toLowerCase();

        const filteredPacks = packs.filter(pack => 
            pack.title.toLowerCase().includes(lowerCaseSearch) ||
            pack.categories.some(category => category.toLowerCase().includes(lowerCaseSearch))
        );

        const slicePacks = filteredPacks.slice(offset, offset + limit);
        const totalPacks = filteredPacks.length;

        return new Response(
            JSON.stringify({
                status: "success",
                data: {
                    stats: { totalPacks: totalPacks },
                    packs: slicePacks,
                },
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    };

    if (favorites) {
        let favoriteIds: FavoriteIds[] = [];

        try {
            favoriteIds = JSON.parse(favorites);  

            if (!Array.isArray(favoriteIds) || !favoriteIds.every(item => typeof item === 'object' && 'id' in item)) {
                throw new Error("Invalid data format");
            };
        } catch (error) {
            return new Response(
                JSON.stringify({
                    status: "fail",
                    type: "Validation Error",
                    message: "The FAVORITES parameter must be a valid array of objects. Each object should have an 'id' property with a string value. Please correct the format of this parameter."
                }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        };

        if (!favoriteIds.length) {
            return new Response(
                JSON.stringify({
                    status: "success",
                    data: {
                        stats: { totalPacks: 0 },
                        packs: [],
                    },
                }),
                { status: 200, headers: { "Content-Type": "application/json" } }
            );
        };

        const filteredPacks = packs.filter(pack => favoriteIds.some(item => item.id === pack.id));
        const slicePacks = filteredPacks.slice(offset, offset + limit);
        const totalPacks = filteredPacks.length;

        return new Response(
            JSON.stringify({
                status: "success",
                data: {
                    stats: { totalPacks: totalPacks },
                    packs: slicePacks,
                },
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    };

    const slicePacks = packs.slice(offset, offset + limit);
    const totalPacks = packs.length;

    return new Response(
        JSON.stringify({
            status: "success",
            data: {
                stats: { totalPacks: totalPacks },
                packs: slicePacks,
            },
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
};
