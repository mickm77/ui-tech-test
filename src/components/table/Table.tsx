import { useEffect, useState } from "react";
import { DefaultTableDef } from "../../resources/tableDef";
import TableHead from "./TableHead";
import useLocalPagination from "../../helpers/useLocalPagination";
import TableFooter from "./TableFooter";
import TableLine from "./TableLine";
import useLocalSort from "../../helpers/useLocalSort";
import useFilter from "../../helpers/useFilter";
import css from "./table.module.css";

interface TableProps {
  data: any[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
  columns: DefaultTableDef[];
}

const Table = ({ data = [], isLoading, isFetching, columns }: TableProps) => {
  const [sortedOn, setSortedOn] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState<Record<string, string>[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 8;
  const filteredData = useFilter(data, filters);
  const sortedData = useLocalSort(filteredData, sortOrder, sortedOn);
  const { pageData, totalPages } = useLocalPagination(
    sortedData,
    page,
    pageSize
  );

  useEffect(() => {
    setPage(1);
  }, [data, filters, setSortedOn]);

  const setNewPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const setSort = (field: string, direction: string) => {
    setSortedOn(field);
    setSortOrder(direction as "asc" | "desc");
  };

  const setFilter = (field: string, value: string) => {
    setFilters((prev) => {
      const newFilters = prev.filter((filter) => filter.field !== field);
      if (value) {
        newFilters.push({ field, value });
      }
      return newFilters;
    });
  };
  console.log(columns, page);
  return (
    <>
      <table className={`${css.table} ${isFetching ? css.tableFetch : ""}`}>
        <TableHead
          columns={columns}
          setSort={setSort}
          setFilter={setFilter}
          filters={filters}
          sortedOn={sortedOn}
          sortOrder={sortOrder}
        />
        <tbody>
          {isLoading && <tr>Loading...</tr>}
          {pageData?.map((item) => (
            <TableLine key={item.id} item={item} columns={columns} />
          ))}
        </tbody>
      </table>
      <TableFooter page={page} totalPages={totalPages} setPage={setNewPage} />
    </>
  );
};
export default Table;
