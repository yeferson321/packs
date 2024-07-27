import { IconChevronLeft, IconChevronRight } from '../icons/react/outline';

interface Props {   
    totalItems: number;
    itemsPerPage: number;
    maxPages: number;
    minPages: number;
};

const Pagination = ({ totalItems, itemsPerPage, maxPages, minPages }: Props) => {
    const currentPage = parseInt(new URLSearchParams(window.location.search).get('page') || '1');
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const calculatePageRange = (currentPage: number, totalPages: number) => {
        if (totalPages <= maxPages) return { startPage: 1, endPage: totalPages, hideLeftContent: false, hideRightContent: false };
        if (currentPage <= minPages) return { startPage: 1, endPage: maxPages, hideLeftContent: false, hideRightContent: true };
        if (currentPage > totalPages - minPages) return { startPage: totalPages - minPages, endPage: totalPages, hideLeftContent: true, hideRightContent: false };

        return {
            startPage: currentPage - Math.floor((maxPages - 1) / 2),
            endPage: currentPage + Math.floor((maxPages - 1) / 2),
            hideLeftContent: true,
            hideRightContent: true
        };
    };

    const { startPage, endPage, hideLeftContent, hideRightContent } = calculatePageRange(currentPage, totalPages);
    const pagesToShow = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    const createPageLink = (page: number): string => {
        const urlParams = new URLSearchParams(window.location.search);

        if (page === 1) {
            urlParams.delete('page');
        } else {
            urlParams.set('page', page.toString());
        }

        const queryString = urlParams.toString();
        return queryString ? `?${queryString}` : '/';
    };

    return (
        <nav className="mt-12 flex items-center justify-center space-x-3 xs:space-x-6" aria-label="Pagination Navigation">
            <a href={currentPage > 1 ? createPageLink(currentPage - 1) : '#'} className={`p-1.5 xs:px-6 xs:py-3 rounded-lg ${currentPage > 1 ? 'bg-amber-500 hover:bg-amber-500/90' : 'cursor-not-allowed bg-neutral-900 opacity-90'}`} aria-label="Previous page">
                <IconChevronLeft strokeWidth="4" className={`w-5 xs:w-6 h-5 xs:h-6 ${currentPage > 1 ? 'stroke-black' : 'stroke-neutral-400'}`} />
            </a>
            <ul className="inline-flex items-center space-x-3 text-base xs:text-xl font-medium text-white">
                {hideLeftContent && (
                    <>
                        <li>
                            <a href={createPageLink(1)} className="flex items-center justify-center w-8 xs:w-12 h-8 xs:h-12 rounded-lg bg-neutral-900 transition ease-in-out hover:bg-neutral-800 duration-300">
                                1
                            </a>
                        </li>
                        <span className="h-7 w-px bg-white" aria-hidden="true" />
                    </>
                )}
                {pagesToShow.map((page) => (
                    <li key={page}>
                        <a href={createPageLink(page)} className={`flex items-center justify-center w-8 xs:w-12 h-8 xs:h-12 rounded-lg bg-neutral-900 transition ease-in-out hover:bg-neutral-800 duration-300 ${page === currentPage && 'border-2 border-amber-500'}`}>
                            {page}
                        </a>
                    </li>
                ))}
                {hideRightContent && (
                    <>
                        <span className="h-7 w-px bg-white" aria-hidden="true" />
                        <li>
                            <a href={createPageLink(totalPages)} className="flex items-center justify-center w-8 xs:w-12 h-8 xs:h-12 rounded-lg bg-neutral-900 transition ease-in-out hover:bg-neutral-800 duration-300">
                                {totalPages}
                            </a>
                        </li>
                    </>
                )}
            </ul>
            <a href={currentPage < totalPages ? createPageLink(currentPage + 1) : '#'} className={`p-1.5 xs:px-6 xs:py-3 rounded-lg ${currentPage < totalPages ? 'bg-amber-500 hover:bg-amber-500/90' : 'cursor-not-allowed bg-neutral-900 opacity-90'}`} aria-label="Next page">
                <IconChevronRight strokeWidth="4" className={`w-5 xs:w-6 h-5 xs:h-6 ${currentPage < totalPages ? 'stroke-black' : 'stroke-neutral-400'}`} />
            </a>
        </nav>
    );
};

export default Pagination;
