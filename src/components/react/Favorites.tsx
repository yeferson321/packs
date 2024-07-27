import { useEffect, useState } from 'react';
import type { FavoritesPacksResponse } from '../../utils/types/definitions';
import Gallery from './Gallery';

interface Props {
	page: number;
	itemsPerPage: number;
	offset: number;
	message?: string | null | undefined;
	fallback?: string | null | undefined;
};

export const Favorite = ({ page, itemsPerPage, offset, message, fallback }: Props) => {
    const [noFound, setNoFound] = useState<boolean>();
    const [data, setData] = useState<FavoritesPacksResponse | undefined>(undefined);
	const favoritePacks: string[] = JSON.parse(window.localStorage.getItem('favoritePacks') || "[]");
	/* const validPacks: string[] = favoritePacks.filter(pack => pack !== '') */
/* 	const validFavorite: string[] = favoritePacks.filter(id => id !== '')
 */
	console.log(`/api/test-post?limit=${itemsPerPage}&offset=${offset}&favorites=${favoritePacks}`)

	const removeFavorites = () => {
		window.localStorage.removeItem('favoritePacks'); 
		setNoFound(false);
	};

/* 	console.log(favoritePacks) */

	useEffect(() => {
		/*if (validPacks.length) {
			 const getData = async () => {
				const res = await fetch(`/api/test-post?limit=${itemsPerPage}&offset=${offset}&favorites=${JSON.stringify(validPacks)}`);

				// This will activate the closest `error.js` Error Boundary
				if (!res.ok) throw new Error('Failed to fetch data');

				const data: FavoritesPacksResponse = await res.json();

				console.log("data", !data.data.packs.length)
				if (!data.data.packs.length) {
					setNoFound(false);
					return;
				};

				setNoFound(true);
				setData(data);
			}; 
			getData(); 
		} else {
			setNoFound(false);
		};*/
	}, [offset]);

	if (noFound === undefined) {
        return fallback
    }

	return (
		noFound ? (
			<main className="max-w-screen-lg mx-auto p-4">
				{message}
				<div className="my-3">
					<p className="text-xs text-white">Mostrando {page}-{offset} de {data?.data.stats.total}.</p>
					<button type="button" onClick={() => removeFavorites()} className="text-xs text-amber-500 hover:underline">
						Eliminar todos mis packs favoritos
					</button>
				</div>
				<h2 className="text-white text-base">
					Los packs que marques como favoritos podrían desaparecer si navegas en modo incógnito.
				</h2>
				<Gallery packs={data?.data.packs ?? []} className="mt-6 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-4" />
			</main>
		) : (
			<main slot="noFavorites" className="max-w-screen-lg mx-auto px-4 py-12">
				<div className="text-center">
					<div className="flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 fill-white">
							<path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
						</svg>
					</div>
					<h1 className="mt-8 text-lg font-semibold text-white">¡Bienvenido a tus packs favoritos!</h1>
					<p className="mt-6 text-base text-white">Parece que aún no tienes packs favoritos.</p>
					<p className="mt-6 text-base text-white">Los packs que marques como favoritos podrían desaparecer si navegas en modo incógnito.</p>
					<div className="mt-6">
						<a href="/" className="text-xs text-amber-500 hover:underline">
							Volver a la página principal
						</a>
					</div>
				</div>
			</main>
		)
	)
};




