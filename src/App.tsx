import { useState } from "react";
import PropsDemo from "./exercises/PropsDemo.tsx";
import MenuButton from "./components/MenuButton.tsx";
import ListDemo from "./exercises/ListDemo.tsx";
import EventDemo1 from "./exercises/EventDemo.tsx";
import FormUncontrolled from "./exercises/FormsUncontrolled.tsx";
import StateDemo1 from "./exercises/StateDemo1.tsx";
import StateDemo2 from "./exercises/StateDemo2.tsx";

function App() {
	const [selectedView, setSelectedView] = useState("info");


	function handleSelected(selected: string) {
		setSelectedView(selected);
	}


	return (
		<>
			<div className="flex w-full text-center flex-col">
				<div className="border-b-2 border-blue-600 p-4">
					<h2 className="text-5xl">React Exercises</h2>
				</div>
				<div className="flex">
					<div className="flex flex-col gap-2 p-3">
						<Buttons onSelected={handleSelected} />
					</div>
					<div className="flex-[3] p-3 w-[800px] text-left border-l-2">
						{selectedView == "info" && <p>All exercises for React day-1</p>}
						{selectedView == "props1" && <PropsDemo title={"Props Demo1"} />}
						{selectedView == "listdemo" && <ListDemo title={"List Demo"} />}
						{selectedView == "eventdemo1" && <EventDemo1 title={"Event Demo1"} />}
						{selectedView == "formsuncontrolled" && <FormUncontrolled title={"Forms Uncontrolled"} />}
						{selectedView == "statedemo1" && <StateDemo1 title={"State Demo1"} />}
						{selectedView == "statedemo2" && <StateDemo2 title={"State Demo2"} />}
					</div>
				</div>
			</div>
		</>
	);
}

type ButtonProps = {
	onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
	const { onSelected: handleSelected } = props;
	return (
		<>
			<MenuButton onClick={() => handleSelected("info")}>
				Info
			</MenuButton>
			{/* Add a new button for each of the exercises you complete */}
			<MenuButton onClick={() => handleSelected("props1")}>
				Props demo1
			</MenuButton>
			<MenuButton onClick={() => handleSelected("listdemo")}>
				List demo
			</MenuButton>
			<MenuButton onClick={() => handleSelected("eventdemo1")}>
				Event demo1
			</MenuButton>
			<MenuButton onClick={() => handleSelected("formsuncontrolled")}>
				Forms Uncontrolled
			</MenuButton>
			<MenuButton onClick={() => handleSelected("statedemo1")}>
				State Demo1
			</MenuButton>
			<MenuButton onClick={() => handleSelected("statedemo2")}>
				State Demo2
			</MenuButton>
		</>
	);
};

export default App;