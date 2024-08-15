import { useEffect, useState } from "react";
import type { PacksResponse } from "../../utils/types/definitions";
import Gallery from "./Gallery";

interface Props {   
    limit: number;
};

const RandomPacks = ({ limit }: Props) => {
    const [data, setData] = useState<PacksResponse['data'] | null>(null);

    useEffect(() => {   
		
        const getData = async () => {
            const response = await fetch(`http://localhost:4321/api/random-packs.json?limit=${limit}`, {
                headers: { 'X-Auth-Token': "b3e5c7d9a1f2e4g6h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1" }
            });
            
            if (!response.ok) window.location.href = "/404";
                  
            const { data }: PacksResponse = await response.json();     


			setData(data);
		};

		getData();

      

	}, []);


    console.log("Se ejecut")

    return (
        <Gallery packs={data?.packs || []} className="mt-6 grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-4" />
    );
};

export default RandomPacks;