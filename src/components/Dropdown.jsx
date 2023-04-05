import React, { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

const Dropdown = ({ options, selection, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) return;
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    }

    const renderedOptions = options.map((option) => {
        return (<div
            className='hover:bg-sky-100 rounded cursor-pointer p-1'
            onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>);
    });

    return <div className='w-48 relative' ref={divEl}>
        <Panel
            className='flex justify-between items-center cursor-pointer'
            onClick={handleClick}>
            <span>{selection?.label || "Select..."}</span>
            <GoChevronDown />
        </Panel>
        {isOpen &&
            <Panel className='absolute top-full'>
                {renderedOptions}
            </Panel>
        }
    </div>;
}

export default Dropdown