import { createContext, useContext, useState, SetStateAction, Dispatch } from "react";


interface RoleContextType {
	role: string;
	setRole: Dispatch<SetStateAction<string>>;
}
const RoleContext = createContext<RoleContextType>({ role: "", setRole: () => {} });


function RoleContextProvider( {children}: { children: React.ReactNode }) {
	const [role, setRole] = useState("anonymous");
	return (
		<RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
	);
}


function useRole() {
	return useContext(RoleContext);
}

export default RoleContextProvider;
export { useRole };
