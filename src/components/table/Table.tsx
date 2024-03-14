import { DefaultTableDef, tableDef } from "../../resources/tableDef";
import { Person } from "../../types/People";
import TableHead from "./TableHead";

interface TableProps {
  data: Person[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
}

const Table = ({ data, isLoading, isFetching }: TableProps) => {
  const columns: DefaultTableDef[] = [
    tableDef.name,
    tableDef.dateOfBirth,
    tableDef.startDate,
    tableDef.active,
    {
      type: "string",
      label: "Actions",
      field: "actions",
      sortable: false,
      filterable: false,
      cellRenderer: () => {
        return (
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <table className={`table ${isFetching ? "table-fetch" : ""}`}>
      <TableHead columns={columns} />
      <tbody>
        {isLoading && <tr>Loading...</tr>}
        {data?.map((person) => (
          <tr key={person.id}>
            {columns?.map((column) => (
              <td key={column.field}>
                {column.cellRenderer
                  ? column.cellRenderer(person[column.field as keyof Person])
                  : person[column.field as keyof Person]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
