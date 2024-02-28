import { BaseProps } from "../types/types.ts";
import { useState } from "react";

function StateDemo1({ title }: BaseProps) {
	const [count, setCount] = useState(0);
	return (
		<>
			<h2 className="text-2xl">{title}</h2>
			<button className="m-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 text-slate-50" onClick={() => {
				setCount(count + 1);
			}}>Increment
			</button>
			<button className="m-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 text-slate-50" onClick={() => {
				setCount(count - 1);
			}}> Decrement
			</button>
			<h3 className="text-2xl font-semibold">{count}</h3>
		</>
	);
}

export default StateDemo1;
