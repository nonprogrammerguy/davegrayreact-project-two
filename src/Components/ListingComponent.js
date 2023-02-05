const ListingComponent = ({fetchedItems}) => {
    return (
        <ul>
            {
                fetchedItems.map((item) => {
                    return (<li className={'list-item'} key={item.id}>
                        {JSON.stringify(item)}
                    </li>);
                })
            }
        </ul>
    );
}

export default ListingComponent;