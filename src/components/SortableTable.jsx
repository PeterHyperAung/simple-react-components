import Table from './Table'
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go'
import useSort from '../hooks/useSort';

const SortableTable = (props) => {
    const { config, data } = props

    const {
        sortedData,
        sortBy,
        sortOrder,
        setSortColumn } = useSort(data, config);

    const updatedConfig = config.map(col => {
        if (!col.sortValue) {
            return col
        }

        return {
            ...col,
            header: () => (<th onClick={() => setSortColumn(col.label)} className="cursor-pointer hover:bg-gray-100"><div className='flex items-center'>{getIcon(col.label, sortBy, sortOrder)}{col.label}</div></th>)
        }
    })

  
    return <Table {...props} config={updatedConfig} data={sortedData} />
}

function getIcon(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallUp />
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <GoArrowSmallDown />
        </div>
    }
}

export default SortableTable