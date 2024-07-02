import type { Packs, PacksResponse } from "./types/definitions";

const trends = ['sophie dee', 'sophie dee', 'sophie dee', 'jovencita colombiana', 'kathrin 3', 'melisa gutierrez', 'canela skin', 'krissy lynn', 'blake blossom'];

const packs: Packs[] = [
    {
        id: "234fwdf436y35tg",
        tab: "caseros",
        percent: 1,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien gorda",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "34f3g34g34g3345g",
        tab: "onlyfans",
        percent: 2,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com me follo trios que bien",
        categories: ["Aficionado", "Caseros", "Gordas", "Teen", "Sexo duro"],
    },  
    {   
        id: "34g35gerfw4g34tg4",
        tab: "onlyfans",
        percent: 3,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Sexo duro", "Bisexual", "Teen", "Culos", "Celebridades"],
    },  
    {   
        id: "45g35gsfe5r6578546",
        tab: "caseros",
        percent: 4,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "sdbnrm3f34f398hgf3",
        tab: "caseros",
        percent: 5,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "wef27oiugwrf3f3ver",
        tab: "onlyfans",
        percent: 6,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "v356h456h4g343434",
        tab: "onlyfans",
        percent: 7,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "2f54768kjntf34f2g",
        tab: "caseros",
        percent: 8,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "f2g4hetc23246657j6",
        tab: "telegram",
        percent: 9,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "fvnmko798676gffe3f2",
        tab: "caseros",
        percent: 10,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "ewrgh578u7hgr3f",
        tab: "telegram",
        percent: 11,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "124567ujtfv3rr4fg34",
        tab: "telegram",
        percent: 12,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Escuela", "Colombianas", "Babe", "Trios"],
    },  
    {   
        id: "g4534675jhbrg345g45g4",
        tab: "onlyfans",
        percent: 13,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Caseros", "Gordas", "Teen", "Sexo duro"],
    },  
    {   
        id: "342536h54rgv3rg3",
        tab: "telegram",
        percent: 14,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Caseros", "Gordas", "Teen", "Sexo duro"],
    },  
    {   
        id: "2543647uhbrg354g54g",
        tab: "telegram",
        percent: 15,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Caseros", "Gordas", "Teen", "Sexo duro"],
    },  
    {   
        id: "efrw45h456h45g34",
        tab: "caseros",
        percent: 16,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Aficionado", "Caseros", "Gordas", "Teen", "Sexo duro"],
    },  
    {   
        id: "254y46htg4r5g356h46",
        tab: "telegram",
        percent: 17,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Brasileras", "Tetas pequeñas", "Babe", "Real", "Pelirojas"],
    },  
    {   
        id: "456h56g356h45h4be56",
        tab: "caseros",
        percent: 18,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Brasileras", "Tetas pequeñas", "Babe", "Real", "Pelirojas"],
    },  
    {   
        id: "tyu7k6kuj4g34g344",
        tab: "caseros",
        percent: 19,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Brasileras", "Tetas pequeñas", "Babe", "Real", "Pelirojas"],
    },  
    {   
        id: "gbhnjmui,o79kj5tr",
        tab: "telegram",
        percent: 20,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Brasileras", "Tetas pequeñas", "Babe", "Real", "Pelirojas"],
    },  
    {   
        id: "w456y46h34t356h",
        tab: "telegram",
        percent: 21,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Brasileras", "Tetas pequeñas", "Babe", "Real", "Pelirojas"],
    },  
    {   
        id: "342567uhb4th45g4",
        tab: "caseros",
        percent: 22,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Brasileras", "Tetas pequeñas", "Babe", "Real", "Pelirojas"],
    },  
    {   
        id: "23g5647ju57j758j76",
        tab: "onlyfans",
        percent: 23,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Brasileras", "Tetas pequeñas", "Babe", "Real", "Pelirojas"],
    },  
    {   
        id: "wnryumkt78jrf3",
        tab: "onlyfans",
        percent: 24,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Brasileras", "Tetas pequeñas", "Babe", "Real", "Pelirojas"],
    },  
    {   
        id: "zxcvw45467ujuyn5",
        tab: "caseros",
        percent: 25,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Gordas", "Jovencitas", "Maduras", "Culos", "Pelirojas"],
    },  
    {   
        id: "qrg4t5h67ju8ikjnb2qg",
        tab: "onlyfans",
        percent: 26,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Gordas", "Jovencitas", "Maduras", "Culos", "Pelirojas"],
    },  
    {   
        id: "bnuik79687uytgfq",
        tab: "onlyfans",
        percent: 27,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Gordas", "Jovencitas", "Maduras", "Culos", "Pelirojas"],
    },  
    {   
        id: "2435gbrukilo890y3",
        tab: "caseros",
        percent: 28,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "Hola com estas espero que bien",
        categories: ["Publico", "Camara web", "Interracial", "Maduras", "Morenas"],
    },  
    {   
        id: "134rqwfvwrytnukl0lk67",
        tab: "caseros",
        percent: 29,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        title: "me perra com estas espero que bien",
        categories: ["Anal", "Publico", "Orgias", "Pelirojas", "Pelirojas"],
    },
];

export const getPacks = async ( limit: number, offset: number, search: string ): Promise<PacksResponse> => {
    let filteredPacks: Packs[];

    if (search) {
        const lowerCaseSearch = search.toLowerCase();

        filteredPacks = packs.filter((pack) => {
            const titleMatch = pack.title.toLowerCase().includes(lowerCaseSearch);
            const categoriesMatch = pack.categories.some((category) =>
              category.toLowerCase().includes(lowerCaseSearch)
            );
            return titleMatch || categoriesMatch;
        });
    } else {
        filteredPacks = packs;
    };

    const resultPack = filteredPacks.slice(offset, offset + limit);
    const resultTotal = filteredPacks.length;

    return {
        status: "success",
        data: {
            stats: {
                total: resultTotal,
            },
            trends: trends,
            packs: resultPack,
        },
    };
};

export const getRoutePacks = async ( tab: string ): Promise<PacksResponse> => {
    const filteredPacks = packs.filter((pack) => pack.tab === tab);
    const resultTotal = filteredPacks.length;
    const resultPack = filteredPacks;

    return {
        status: "success",
        data: {
            stats: {
                total: resultTotal,
            },
            trends: trends,
            packs: resultPack,
        },
    };
};

