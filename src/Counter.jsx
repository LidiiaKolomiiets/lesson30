import React, {useState} from "react";
import './counter.css';


export default (props) => {

    const [count, setCount] = useState(props.initialValue)

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    const reset = () => {
        setCount(props.initialValue)
    };



    return (
        <div className="conteiner">
            <div className="block">
                <button className="btn" onClick={decrement}>-</button>
                <p className="count">{count}</p>
                <button className="btn" onClick={increment}>+</button>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
}





