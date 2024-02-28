
import { useEffect, useState } from "react";
import { BaseProps } from "../types/types.ts";


/*
Exercise
part one --> provide the useEffect without a dependency array and clearInterval and see what happens
part two --> provide the useEffect with an empty dependency array and see what happens
part three --> add an return function  to clear the interval ()
part four --> Add a button to start and stop the interval via a boolean state variable to see what happens with values in the dependency array
*/
export default function UseEffectDemo({ title }: BaseProps) {
	const [count, setCount] = useState(0);
	const [shouldCount, setShouldCount] = useState(false);


	useEffect(() => {
		if(!shouldCount) return;
		const i = setInterval(() => {
			setCount((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(i);
	}, );


	return (
		<>
			<h2 className="text-2xl">{title}</h2>
			<p className="p-4 text-2xl font-semibold">{count}</p>
			<button
				className="bg-blue-500 hover:bg-blue-600 w-1/2 rounded-lg text-slate-50"
				onClick={() => setShouldCount((prev) => !prev)}>
				{shouldCount ? "Stop" : "Start"}
			</button>
		</>
	);
}
