import { useState } from "react";
import PropsDemo from "./exercises/PropsDemo.tsx";
import MenuButton from "./components/MenuButton.tsx";

function App() {
    const [selectedView, setSelectedView] = useState("info");


    function handleSelected(selected: string) {
        setSelectedView(selected);
    }


    return (
        <>
            <div className="flex w-full text-center flex-col">
                <div className="border-b border-2 border-blue-600">
                    <h2 className="text-4xl">React Exercises</h2>
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-2 p-3">
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="flex-[3] p-3 w-[800px] text-left border-l border-2">
                        {selectedView == "info" && <p>All exercises for React day-1</p>}
                        {selectedView == "props1" && <PropsDemo title={"Props Demo1"}/>}
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
    const { onSelected: handleSelected} = props;
    return (
        <>
            <MenuButton onClick={() => handleSelected("info")}>
                Info
            </MenuButton>
            {/* Add a new button for each of the exercises you complete */}
            <MenuButton onClick={() => handleSelected("props1")}>
                Props demo1
            </MenuButton>
        </>
    );
};

export default App;