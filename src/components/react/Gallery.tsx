import type { Packs } from '../../utils/types/definitions';
import { IconThumbUp } from '../icons/react/solid';

interface Props {
    className: string;
    packs: Packs[];
    fallback?: string | undefined;
};

const Gallery = ({ className, packs, fallback }: Props) => {
    const getStatus = (date: Date): { status: string, background: string } => {
        const now = new Date();
        const differenceInMilliseconds = now.getTime() - date.getTime();
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    
        if (differenceInMilliseconds < 2 * oneDayInMilliseconds) return { status: 'CALIENTE HOY', background: 'bg-amber-500' };
        if (differenceInMilliseconds < 4 * oneDayInMilliseconds) return { status: 'RECIENTE', background: 'bg-blue-500' };
        
        return { status: 'RECOMENDADO', background: 'bg-blue-500' };
    };

    if (packs.length === 0) return fallback;

    return (
        <div className={className}>
            {packs.map((pack) => {
                const { status, background } = getStatus(new Date(pack.hot));
                return (
                    <a key={pack.id} href={`/view?view=${pack.id}`}>
                        <div className="relative w-full aspect-[9/13]">
                            <img src={pack.src} loading="lazy" className="absolute inset-0 w-full h-full object-cover rounded-lg" alt={pack.title} />
                        </div>
                        <div className="mt-2 flex items-center justify-between space-x-1">
                            <p className={`truncate py-px px-1 rounded-md text-xs font-medium text-black ${background}`}>
                                {status}
                            </p>
                            <div className="inline-flex items-center text-sm text-neutral-350">
                                <IconThumbUp className="w-3.5 h-3.5 me-1 fill-neutral-300" />
                                {pack.percent}%
                            </div>
                        </div>
                        <p className="mt-1 text-base text-neutral-350 hover:text-white">{pack.title}</p>
                    </a>
                )
            })}
        </div>
    );
};

export default Gallery;
