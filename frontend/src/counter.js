import React from "react";
const Counter = ({
	value,
	increment,
	decrement,
	incrementIfOdd,
	incrementAsync
}) => {
	return (
		<p>
			Clicked: {value} times <button onClick={increment}>+</button>{" "}
			<button onClick={decrement}>-</button>{" "}
			<button onClick={incrementIfOdd}>Increment if odd</button> //{" "}
			<button onClick={incrementAsync}>Increment async</button>
		</p>
	);
};

export default Counter;
