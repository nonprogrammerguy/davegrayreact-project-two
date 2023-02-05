const TableCellComponent = ({item}) => {
    return (
        <tr key={item.id}>
            {
                Object.values(item).map((val) => {
                    return <td className={'cell'}>
                        {
                            typeof val === 'object' ? JSON.stringify(val) : val
                        }
                    </td>
                })
            }
        </tr>
    );
}

export default TableCellComponent;