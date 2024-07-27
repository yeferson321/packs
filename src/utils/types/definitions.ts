

export interface TabItem {
  name: string;
  href: string;
};

export interface IconsProps {
    strokeWidth?: string | number | undefined;
    className?: string | undefined;
};

export interface Trends {
    href: string;
    trend: string;
};

type Categories = 'Caseros' | 'Maduras' | 'Teen' | 'Jovencitas' | 'Lesbianas' | 'Trios' | 'Japonesas' | 'Aficionado' | 'Anal' | 'Babe' | 'Bisexual' | 'Camara web' | 'Celebridades' | 'Coreanas' | 'Cornudos' | 'Cosplay' | 'Creampie' | 'Culos' | 'Culos grandes' | 'Escuela' | 'Eyaculaciones' | 'Padrastro' | 'Fetiches' | 'Fiestas' | 'Gordas' | 'Gorda buena' | 'Interracial' | 'Juguetes' | 'Latina' | 'Mamadas' | 'Masajes' | 'Masturbacion' | 'Milf' | 'Morenas' | 'Tatuadas' | 'Negras' | 'Niñeras' | 'Orgasmo' | 'Orgias' | 'Pajas' | 'Pelirojas' | 'Pies' | 'Publico' | 'Real' | 'Sexo duro' | 'Solitaria' | 'Tetas grandes' | 'Tetas pequeñas' | 'Colegialas' | 'Flaquitas' | 'Mexicanas' | 'Colombianas' | 'Brasileras';

export interface Packs {
    id: string;
    tab: string;
    percent: number;
    hot: Date;
    src: string;
    title: string;
    categories: Categories[];
};

export interface PacksResponse {
    status: string;
    data: {
        stats: {
            total: number;
            totalPacks: number;
        };
        trends: string[];
        packs: Packs[];
    };
};

export interface RandomPacksResponse {
    status: string;
    data: {
        stats: {
            total: number;
        };
        packs: Packs[];
    };
};

export interface FavoritesPacksResponse {
    status: string;
    data: {
        stats: {
            total: number;
        };
        packs: Packs[];
    };
};