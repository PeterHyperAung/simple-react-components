import { useState } from "react";

function useSort(data, config,) {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const setSortColumn = (label) => {
        setSortBy(label);

        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            return;
        }


        if (sortOrder === null) {
            setSortOrder('asc')
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
        }
    }

    
    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(colummn => colummn.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)
            const reverseOrder = sortOrder === 'asc' ? 1 : -1
            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            } else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }

    

    return {
        sortedData,
        sortBy,
        sortOrder,
        setSortColumn
    }
}

export default useSort;