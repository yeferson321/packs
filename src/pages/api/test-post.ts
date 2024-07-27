
import type { APIRoute } from "astro";
import { packs } from "../../utils/data/data";

export const GET: APIRoute = ({ request }) => {
  const { url } = request;
  const urlObject = new URL(url);
  const limit: number = parseInt(urlObject.searchParams.get("limit") || "10");
  const offset: number = parseInt(urlObject.searchParams.get("offset") || "0");
  const favoritePacks: string[] = JSON.parse(urlObject.searchParams.get("favorites") || "[]");

  const validFavorite: string[] = favoritePacks.filter(id => id !== '');

  if (!validFavorite.length) {
    const totalPacks = packs.length;
    const slicePacks = packs.slice(offset, offset + limit);

    return new Response(
      JSON.stringify({ status: "success", data: { stats: { total: totalPacks, totalPacks: totalPacks }, packs: slicePacks } }),
      {status: 200, headers: { "Content-Type": "application/json" }}
    );
  };

  const totalPacks = packs.length;
  const filteredPacks = packs.filter((pack) => favoritePacks.includes(pack.id));
  const slicePacks = filteredPacks.slice(offset, offset + limit);
  const total = filteredPacks.length;

  if (!total) {
    return new Response(
      JSON.stringify({ status: "fail", type: "Validation Error", message: "Each FAVORITE parameter must be in a valid format." }),
      {status: 422, headers: { "Content-Type": "application/json" }}
    );
  };
  
  return new Response(
    JSON.stringify({ status: "success", data: { stats: { total: total, totalPacks: totalPacks }, packs: slicePacks } }),
    {status: 200, headers: { "Content-Type": "application/json" }}
  );
};  