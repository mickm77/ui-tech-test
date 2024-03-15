

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFilter = (data: any[], filters: Record<string, string>[]) => {
    if (filters.length === 0) {
        return data;
    }
    return data.filter((item) => {
        return filters.every((filter) => {
            return item[filter.field]?.toLowerCase().includes(filter.value.toLowerCase());
        });
    });
}

export default useFilter;