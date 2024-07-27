import type { Packs, PacksResponse, RandomPacksResponse } from "./types/definitions";
import { packs, trends } from "./data/data";

export const getSearchPacks = async (limit: number, offset: number, search: string): Promise<PacksResponse> => {
    const lowerCaseSearch = search.toLowerCase();

    const filteredPacks = packs.filter((pack) => {
        const titleMatch = pack.title.toLowerCase().includes(lowerCaseSearch);
        const categoriesMatch = pack.categories.some((category) =>
            category.toLowerCase().includes(lowerCaseSearch)
        );
        return titleMatch || categoriesMatch;
    });

    const resultPack = filteredPacks.slice(offset, offset + limit);
    const resultTotal = filteredPacks.length;

    return {
        status: "success",
        data: {
            stats: {
                total: resultTotal,
                totalPacks: 0
            },
            trends: trends,
            packs: resultPack,
        },
    };
};

export const getTabPacks = async (limit: number, offset: number, tab: string): Promise<PacksResponse> => {
    const filteredPacks = packs.filter((pack) => pack.tab === tab);
    const resultPack = filteredPacks.slice(offset, offset + limit);
    const resultTotal = filteredPacks.length;

    return {
        status: "success",
        data: {
            stats: {
                total: resultTotal,
                totalPacks: 0
            },
            trends: trends,
            packs: resultPack,
        },
    };
};


type Categories = 'Caseros' | 'Maduras' | 'Teen' | 'Jovencitas' | 'Lesbianas' | 'Trios' | 'Japonesas' | 'Aficionado' | 'Anal' | 'Babe' | 'Bisexual' | 'Camara web' | 'Celebridades' | 'Coreanas' | 'Cornudos' | 'Cosplay' | 'Creampie' | 'Culos' | 'Culos grandes' | 'Escuela' | 'Eyaculaciones' | 'Padrastro' | 'Fetiches' | 'Fiestas' | 'Gordas' | 'Gorda buena' | 'Interracial' | 'Juguetes' | 'Latina' | 'Mamadas' | 'Masajes' | 'Masturbacion' | 'Milf' | 'Morenas' | 'Tatuadas' | 'Negras' | 'Niñeras' | 'Orgasmo' | 'Orgias' | 'Pajas' | 'Pelirojas' | 'Pies' | 'Publico' | 'Real' | 'Sexo duro' | 'Solitaria' | 'Tetas grandes' | 'Tetas pequeñas' | 'Colegialas' | 'Flaquitas' | 'Mexicanas' | 'Colombianas' | 'Brasileras';

export interface Pack {
    id: string;
    tab: string;
    percent: number;
    hot: Date;
    src: string;
    title: string;
    categories: Categories[];
};

export interface PackResponse {
    status: string;
    data: {
        pack: Pack | undefined;
        recommended: Packs[]
    };
};



export const getRandoPacks = (count: number): Packs[] => {
    console.time("getRandomPacks")

    const result: Packs[] = [];
    let len = packs.length;
    const taken = new Array(len);

    while (result.length < count) {
        const x = Math.floor(Math.random() * len);
        const pack = packs[x in taken ? taken[x] : x];
        if (pack !== undefined) {
            result.push(pack);
        }
        taken[x] = --len in taken ? taken[len] : len;
    }

    console.timeEnd("getRandomPacks")

    return result; 
}

export const getViewPack = async (id: string): Promise<PackResponse> => {
    const filteredPack = packs.find(pack => pack.id === id);

    const recommended = getRandoPacks(4);

    return {
        status: "success",
        data: {
            pack: filteredPack,
            recommended: recommended,
        },
    };
};

export const getRandomPacks = async (count: number): Promise<RandomPacksResponse> => {
    const randoPacks = getRandoPacks(12);

    return {
        status: "success",
        data: {
            stats: {
                total: count,
            },
            packs: randoPacks,
        },
    };
};



export const getStorePacks = async (limit: number, offset: number, storePacks: string[]): Promise<RandomPacksResponse> => {
    const filteredPacks = packs.filter(pack => storePacks.includes(pack.id));
    const resultPack = filteredPacks.slice(offset, offset + limit);
    const resultTotal = filteredPacks.length;


  /*   console.log("resultPack", resultPack) */
    return {
        status: "success",
        data: {
            stats: {
                total: resultTotal,
            },
            packs: resultPack,
        },
    };
};
