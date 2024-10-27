const Tabs = ({tabs, activeTab, setActiveTab}) => {
    return (
        <div className="flex justify-center w-full max-h-[31px] mb-4 bg-[#151515] rounded-[10px]">
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`py-2 px-4 w-full rounded-[10px] flex items-center justify-center transition-colors duration-300 ${activeTab === tab.name ? 'bg-[#0098EA] text-white' : 'bg-[#151515] text-[#D7D7D7]'}`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};
export default Tabs;