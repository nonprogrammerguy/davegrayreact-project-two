const TableHeaderComponent = ({items, idx}) => {
    return <tr key={idx}>
        {
            Object.keys(items).map((val) => {
                return <td className={'cell header-text'}>
                    {val}
                </td>
            })
        }
    </tr>
}

export default TableHeaderComponent;