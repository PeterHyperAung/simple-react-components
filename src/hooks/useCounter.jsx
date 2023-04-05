import { useState, useEffect } from "react";

const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        console.log(count);
    }, [count]);

    const handleClick = () => {
        setCount(prev => prev + 1)
    }

    return {
        count,
        handleClick
    }
}

export default useCounter;