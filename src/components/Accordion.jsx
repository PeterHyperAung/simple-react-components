import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (<div key={item.id} className="border rounded">
      <div onClick={() => handleClick(index)} className="flex p-3 bg-gray-50 border-b items-center justify-between">
        {item.label} <span className='text-lg'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
      </div>
      {isExpanded && <div className='p-3'>{item.content}</div>}
    </div>);
  })

  return (
    <div className='p-3'>
      {renderedItems}
    </div>
  )
}

export default Accordion
