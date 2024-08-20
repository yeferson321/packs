export interface IconProps {
    strokeWidth?: string | number | undefined;
    className?: string | undefined;
};

export interface Tabs {
    name: string;
    href: string;
};

export interface Trends {
    trend: string;
    href: string;
};

type Categories = 'Caseros' | 'Maduras' | 'Teen' | 'Jovencitas' | 'Lesbianas' | 'Trios' | 'Japonesas' | 'Aficionado' | 'Anal' | 'Babe' | 'Bisexual' | 'Camara web' | 'Celebridades' | 'Coreanas' | 'Cornudos' | 'Cosplay' | 'Creampie' | 'Culos' | 'Culos grandes' | 'Escuela' | 'Eyaculaciones' | 'Padrastro' | 'Fetiches' | 'Fiestas' | 'Gordas' | 'Gorda buena' | 'Interracial' | 'Juguetes' | 'Latina' | 'Mamadas' | 'Masajes' | 'Masturbacion' | 'Milf' | 'Morenas' | 'Tatuadas' | 'Negras' | 'Niñeras' | 'Orgasmo' | 'Orgias' | 'Pajas' | 'Pelirojas' | 'Pies' | 'Publico' | 'Real' | 'Sexo duro' | 'Solitaria' | 'Tetas grandes' | 'Tetas pequeñas' | 'Colegialas' | 'Flaquitas' | 'Mexicanas' | 'Colombianas' | 'Brasileras';

export interface Packs {
    id: string;
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
            totalPacks: number;
        };
        packs: Packs[];
    };
};

export interface PackResponse {
    status: string;
    data: {
        pack: Packs;
        related: Packs[];
    };
};

export interface PageRange {
    startPage: number;
    endPage: number;
    hideLeftContent: boolean;
    hideRightContent: boolean;
};

export interface FavoriteIds {
    id: string;
};