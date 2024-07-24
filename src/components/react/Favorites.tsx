import { useEffect, useState } from 'react';
import type { RandomPacksResponse } from '../../utils/types/definitions';

import { getStorePacks } from '../../utils/feath';
import Gallery from '../Gallery';

interface Props { 
    itemsPerPage: number;
	offset: number; 
	message?: string | null | undefined
	noFavorites?: string | null | undefined
};

export const Favorite = ({itemsPerPage, offset, message, noFavorites}: Props) => {
	const [data, setData] = useState<RandomPacksResponse | []>([]);
	const storedPacksString = window.localStorage.getItem('storePacks');
	const storedPacks: string[] = storedPacksString ? JSON.parse(storedPacksString) : [];

/* 	console.log(storedPacks) */

	useEffect(() => {
		const fetchData = async () => {
			const response: RandomPacksResponse = await getStorePacks(itemsPerPage, offset, storedPacks);
			setData(response); 
		};
		fetchData();

		
	},[itemsPerPage, offset, storedPacks]);

/* 	console.log("data", data.data) */

  	return (

    	storedPacks.length ? (
		
    	  	<main className="max-w-screen-lg mx-auto p-4">
				{message}
				<div className="my-3">
				  	<p className="text-xs text-white">Mostrando 1-2 de 2.</p>
				  	<button type="button" className="text-xs text-amber-500 hover:underline">
				 		Eliminar todos mis packs favoritos
				  	</button>
				</div>
				<h2 className="text-white text-base">
				  	Los packs que marques como favoritos podrían desaparecer si navegas en modo incógnito.
				</h2>
				{/* <Gallery packs={data.data.packs} totalItems={data.data.stats.total} itemsPerPage={itemsPerPage} className="mt-6 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-4"/> */}
			</main>

    	) : (
			noFavorites
    	)
     
  	)
};




