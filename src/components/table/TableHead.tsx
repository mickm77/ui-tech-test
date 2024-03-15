import threeDots from "../../assets/threeDots.svg";
import { DefaultTableDef } from "../../resources/tableDef";
import css from "./table.module.css";

const TableHead = ({
  columns,
  filters,
  setSort,
  setFilter,
  sortOrder,
  sortedOn,
}: {
  columns: DefaultTableDef[];
  filters: { [key: string]: string }[];
  setSort: (field: string, direction: string) => void;
  setFilter: (field: string, value: string) => void;
  sortOrder: "asc" | "desc";
  sortedOn: string;
}) => {
  console.log(columns, filters);
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.field} className={css.columnHeader}>
            {column.label}
            {(column.sortable || column.filterable) && (
              <>
                <img
                  src={threeDots}
                  className={css.tableMenu}
                  alt="Column Menu"
                />
                <div className={css.columnOptions}>
                  {column.sortable && (
                    <>
                      <div
                        className={css.sorting}
                        onClick={() => setSort(column.field, "asc")}
                      >
                        <img
                          src="https://img.icons8.com/ios/50/000000/sort-up.png"
                          alt="Sort ascending"
                        />
                        <span>Sort Ascending</span>
                      </div>
                      <div
                        className={css.sorting}
                        onClick={() => setSort(column.field, "desc")}
                      >
                        <img
                          src="https://img.icons8.com/ios/50/000000/sort-down.png"
                          alt="Sort descending"
                        />
                        <span>Sort Descending</span>
                      </div>
                    </>
                  )}
                  {column.filterable && (
                    <div className={css.filtering}>
                      <input
                        type="text"
                        value={filters[column.field]}
                        onChange={(e) =>
                          setFilter(column.field, e.target.value)
                        }
                      />
                    </div>
                  )}
                </div>
              </>
            )}
            {
              //if column is sorted, show the direction
              column.field === sortedOn && (
                <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
              )
            }
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
