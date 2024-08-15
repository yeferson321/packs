/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_TOKEN: string;
    readonly SECRET_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}