import NavbarComponent from "./Components/NavbarComponent";
import {useEffect, useState} from "react";

import './Styles/app.css';
import TableComponent from "./Components/TableComponent";

function App() {
    let [currentTab, setCurrentTab] = useState('users');

    let [fetchedItems, setFetchedItems] = useState([]);

    const handleGetItems = async () => {
        let currentAPI = resolveAPI();

        const response = await fetch(currentAPI);

        setFetchedItems(await response.json() ?? []);
    };

    const resolveAPI = () => {
        switch (currentTab) {
            case 'users':
                return 'https://jsonplaceholder.typicode.com/users';
            case 'posts':
                return 'https://jsonplaceholder.typicode.com/posts';
            case 'comments':
                return 'https://jsonplaceholder.typicode.com/comments';
            default:
                return 'https://jsonplaceholder.typicode.com/users';
        }
    }

    useEffect(() => {
        handleGetItems();
    }, [currentTab]);

    return (
       <>
           <NavbarComponent
               setCurrentTab={setCurrentTab}
               currentTab={currentTab}
           />

           <TableComponent
               fetchedItems={fetchedItems}
           />
       </>
    );
}

export default App;
