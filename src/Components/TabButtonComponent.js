const TabButtonComponent = ({item, setCurrentTab, currentTab}) => {
    return (
        <button
            className={currentTab === item ? 'tab active' : 'tab'}
            onClick={() => {
                setCurrentTab(item);
            }}
        >
            {item}
        </button>
    );
}

export default TabButtonComponent