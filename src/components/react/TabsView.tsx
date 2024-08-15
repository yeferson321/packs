import { useCallback, useEffect, useState } from "react";
import type { Packs, PacksResponse } from "../../utils/types/definitions";
import Gallery from "./Gallery";

interface Props {
    related: Packs[];
    skeleton?: any;
};

interface Tab {
    label: string;
    fetchUrl: string | null;
    initialData?: Packs[];
};

const TabsView = ({ related, skeleton }: Props) => {
    const [tabData, setTabData] = useState<{ [key: number]: Packs[] }>({ 0: related });
    const [activeTab, setActiveTab] = useState(0);
    const [loading, setLoading] = useState(false);

    const tabs: Tab[] = [
        { label: "Relacionado", fetchUrl: null, initialData: related },
        { label: "Recomendado", fetchUrl: "/api/random-packs.json?limit=4" },
    ];

    const fetchData = useCallback(async () => {
        const currentTab = tabs[activeTab];

        if (currentTab && currentTab.fetchUrl && !tabData[activeTab]) {
            setLoading(true);
            const response = await fetch(`${window.location.origin}${currentTab.fetchUrl}`, {
                headers: { 'X-Auth-Token': import.meta.env.PUBLIC_TOKEN }
            });
            
            if (!response.ok) window.location.href = "/404";
            
            const { data }: PacksResponse = await response.json();
            setTabData((prev) => ({ ...prev, [activeTab]: data.packs }));
            setLoading(false);
        };
    }, [activeTab, tabData]);

    useEffect(() => {
        fetchData();
    }, [activeTab, fetchData]);

    return (
        <div className="min-w-full">
            <div className="flex flex-nowrap text-nowrap text-white text-base overflow-x-auto touch-pan-x hide-scroll">
                {tabs.map((tab, index) => (
                    <button type="button" key={index} onClick={() => setActiveTab(index)} className={`px-4 py-3 ${activeTab === index && "rounded-full bg-neutral-800"}`}>
                        {tab.label}
                    </button>
                ))}
            </div>
            {loading ? skeleton : <Gallery packs={tabData[activeTab] || []} className="mt-6 grid grid-cols-2 gap-4" />}
        </div>
    );
};

export default TabsView;