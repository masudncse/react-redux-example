import {useEffect, useState} from "react";
import PropTypes from 'prop-types';

const Counter = ({initialCounter = 0}) => {
    const [count, setCount] = useState(initialCounter)

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log(count)
    }, [count]);

    return (
        <>
            <button type="button" onClick={incrementCount}>+</button>
            <label htmlFor="">{count}</label>
            <input type="text" value={count} onChange={(e) => setCount(parseInt(e.target.value))}/>
            <button type="button" onClick={decrementCount}>-</button>
        </>
    );
}

Counter.propTypes = {
    initialCounter : PropTypes.number.isRequired
}

export default Counter;
