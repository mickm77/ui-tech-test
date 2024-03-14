interface TableFooterProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const TableFooter = ({ page, totalPages, setPage }: TableFooterProps) => {
  return (
    <div className="table-footer">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>
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
        Next
      </button>
    </div>
  );
};

export default TableFooter;
