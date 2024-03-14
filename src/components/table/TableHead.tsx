import threeDots from "../../assets/threeDots.svg";
import { DefaultTableDef } from "../../resources/tableDef";

const TableHead = ({ columns }: { columns: DefaultTableDef[] }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.field}>
            {column.label}{" "}
            <img src={threeDots} className="tableMenu" alt="Column Menu" />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
