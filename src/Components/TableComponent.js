import TableCellComponent from "./TableCellComponent";
import TableHeaderComponent from "./TableHeaderComponent";

const TableComponent = ({fetchedItems}) => {
    return (
        <table>
            {
                fetchedItems.map((item, idx) => {
                    if (idx === 0) {
                        return <TableHeaderComponent items={item} idx={idx}/>
                    }
                    return <TableCellComponent item={item} />
                })
            }
        </table>
    );
}

export default TableComponent;