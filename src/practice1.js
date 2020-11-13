const parseData = data => {
    const columns = data.column.map(column => column.name);
    return data.data.map(record => {
        const result = {};
        record.forEach((element, index) => {
            result[columns[index]] = element;
        });
        return result;
    })
}
export { parseData };
