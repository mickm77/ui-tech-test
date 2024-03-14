import { useState } from "react";
import { DefaultTableDef, tableDef } from "../../resources/tableDef";
import { Person } from "../../types/People";
import TableHead from "./TableHead";
import useLocalPagination from "../../helpers/useLocalPagination";
import TableFooter from "./TableFooter";

interface TableProps {
  data: Person[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
}

const Table = ({ data = [], isLoading, isFetching }: TableProps) => {
  const [sortedOn, setSortedOn] = useState<keyof Person>("name");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const { pageData, totalPages } = useLocalPagination<Person>(
    data,
    page,
    pageSize
  );

  const setNewPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
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
    <>
      <table className={`table ${isFetching ? "table-fetch" : ""}`}>
        <TableHead columns={columns} />
        <tbody>
          {isLoading && <tr>Loading...</tr>}
          {pageData?.map((person) => (
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
          {}
        </tbody>
      </table>
      <TableFooter page={page} totalPages={totalPages} setPage={setNewPage} />
    </>
  );
};
export default Table;
