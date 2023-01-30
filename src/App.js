import {useEffect, useState} from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
    const API_URL = 'http://localhost:3400/items';

    const [items, setItems] = useState([]);

    const [newItem, setNewItem] = useState('');

    const [search, setSearch] = useState('');

    const [fetchError, setFetchError] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw Error('Something went wrong.');
                }

                const listItems = await response.json();

                setItems(listItems ?? []);

                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        setTimeout(() => {
            (async () => await fetchItems())();
        }, 2000);
    }, []);

    const handleCheck = async (id) => {
        const listItem = items.map((item) => {
            if (item.id === id) {
                return {...item, checked: !item.checked};
            }

            return item;
        });

        setItems(listItem);

        const myItem = listItem.filter((item) => item.id === id);
        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            'body': JSON.stringify({
                checked: myItem[0].checked
            })
        }

        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);

        if (result) {
            setFetchError(result);
        }
    };

    const handleDelete = async (id) => {
        const listItem = items.filter((item) => {
            return item.id !== id;
        });

        setItems(listItem);

        const deleteOptions = {'method': 'DELETE'};

        const reqUrl = `${API_URL}/${id}`;

        const result = await apiRequest(reqUrl, deleteOptions);

        if (result) {
            setFetchError(result);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newItem === null || newItem === false || newItem === '') {
            return;
        }

        addItem(newItem);

        setNewItem('');
    }

    const addItem = async () => {
        let itemId = items.length ? items[items.length - 1].id + 1 : 1;

        let newObjItem = {
            id: itemId,
            checked: false,
            item: newItem,
        };

        let mergedItems = [...items, newObjItem];

        setItems(mergedItems);

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObjItem)
        }

        const result = await apiRequest(API_URL, postOptions);

        if (result) {
            setFetchError(result);
        }
    }

    return (
        <div className="App">
            <Header title="Grocery list"/>

            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />

            <SearchItem
                search={search}
                setSearch={setSearch}
            />
            <main>
                {isLoading && <p style={{color: "green", marginTop: "10px"}}>Loading Items...</p>}

                {fetchError && <p style={{color: "red"}}>{`Error : ${fetchError}`}</p>}

                {
                    !fetchError && !isLoading && <Content
                        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                }
            </main>
            <Footer length={items.length}/>
        </div>
    );
}

export default App;
