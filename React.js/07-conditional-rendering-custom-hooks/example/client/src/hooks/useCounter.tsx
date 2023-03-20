import React, { useState } from 'react'

function useCounter(defaultValue=0) {
    const [counter, setCounter] = React.useState(defaultValue);

    const increment = () => {
        setCounter(counter+1);
    };

    const decrement = () => {
        setCounter(counter-1);
    };
    return {counter, increment, decrement}
}

export default useCounter