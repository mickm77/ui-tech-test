

const useLocalSort = <T>(data: T[], sort: string, field: string | undefined) => {
        const sorted = data.sort((a: T, b: T) => {
            if (field && a[field as keyof T] && b[field as keyof T]) {
                if (sort === "asc") {
                    return a[field as keyof T] > b[field as keyof T] ? 1 : -1;
                }
                return a[field as keyof T] < b[field  as keyof T] ? 1 : -1;
            }
            return 0;
        });
        return sorted;
    };

export default useLocalSort;