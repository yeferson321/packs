export const prerender = false;
import type { APIRoute } from "astro";
import { packs, trendingSearches } from "../../utils/data/data";

export const GET: APIRoute = ({ request }) => {
    const { url } = request;
    const urlObject = new URL(url);
    const limit: number = parseInt(urlObject.searchParams.get("limit") || "12");
    const offset: number = parseInt(urlObject.searchParams.get("offset") || "0");
    const search: string = urlObject.searchParams.get("search") || "";

    if (search) {
        const lowerCaseSearch = search.toLowerCase();

        const filteredPacks = packs.filter((pack) => {
            const titleMatch = pack.title.toLowerCase().includes(lowerCaseSearch);
            const categoriesMatch = pack.categories.some((category) =>
                category.toLowerCase().includes(lowerCaseSearch)
            );
            return titleMatch || categoriesMatch;
        });
    
        const slicePacks = filteredPacks.slice(offset, offset + limit);
        const total = filteredPacks.length;
        const totalPacks = packs.length;
    
        return new Response(
            JSON.stringify({
                    status: "success",
                    data: {
                        stats: { total: total, totalPacks: totalPacks },
                        packs: slicePacks,
                    },
                }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    };
  
    const totalPacks = packs.length;
    const slicePacks = packs.slice(offset, offset + limit);

    return new Response(
        JSON.stringify({
                status: "success",
                    data: {
                    trends: trendingSearches,
                    stats: { total: totalPacks, totalPacks: totalPacks },
                    packs: slicePacks,
                },
            }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
};
