

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useLocalPagination =<T> (data: T[], page: number, pageSize: number) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
        pageData: data.slice(start, end),
        totalPages: Math.ceil(data.length / pageSize),
    };
}


export default useLocalPagination;