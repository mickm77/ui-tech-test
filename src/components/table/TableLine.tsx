import { DefaultTableDef } from "../../resources/tableDef";
import css from "./table.module.css";

interface baseTableLineProps {
  id: string;
}
interface TableLineProps<T> {
  item: T;
  columns: DefaultTableDef[];
}

const TableLine = <T extends baseTableLineProps>({
  item,
  columns,
}: TableLineProps<T>) => {
  return (
    <tr key={item.id} className={css.row}>
      {columns?.map((column) => (
        <td key={column.field} className={css.cell}>
          {column.cellRenderer
            ? column.cellRenderer(item[column.field as keyof T])
            : item[column.field]}
        </td>
      ))}
    </tr>
  );
};

export default TableLine;
