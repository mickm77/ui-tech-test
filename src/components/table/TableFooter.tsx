import css from "./table.module.css";

interface TableFooterProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const TableFooter = ({ page, totalPages, setPage }: TableFooterProps) => {
  return (
    <div className={css.tableFooter}>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </button>
      <span className={css.pages}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <span
            key={p}
            onClick={() => setPage(p)}
            className={p === page ? "active" : ""}
          >
            {p}
          </span>
        ))}
      </span>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default TableFooter;
