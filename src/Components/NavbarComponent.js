import TabButtonComponent from "./TabButtonComponent";

const NavbarComponent = ({setCurrentTab, currentTab}) => {
    return (
        <div className={'menu'}>
            <TabButtonComponent
                item={'users'}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
            />
            <TabButtonComponent
                item={'posts'}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
            />
            <TabButtonComponent
                item={'comments'}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
            />
        </div>
    );
};

export default NavbarComponent;