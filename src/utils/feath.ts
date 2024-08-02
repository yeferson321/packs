import type { Packs } from "./types/definitions";
import { packs } from "./data/data";

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
/* 


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


 */