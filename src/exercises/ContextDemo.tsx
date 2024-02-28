import { BaseProps } from "../types/types.ts";
import RoleContextProvider, {useRole} from "../components/RoleContextProvider";


const topWidth = 220;


function ContextDemoApp({ title }: BaseProps) {
	return (
		<>
			<div className="text-xl text-green-900 mb-1">{title}</div>
			<RoleContextProvider>
				<Root />
			</RoleContextProvider>
		</>
	);
}
//We include all the dummy-components in one file for simplicity
function Root() {
	const { role } = useRole();
	//Todo → Make this component render the value of role
	return (
		<div className="border border-amber-950 rounded bg-orange-400 m-2 text-center w-[500px] flex flex-col items-center">
			<h2 className="m-0 text-2xl">Root</h2>
			<p>Role: {role}</p>
			<div className="flex justify-center w-full">
				<A />
				<D />
			</div>
		</div>
	);
}
function A() {
	return (
		<div className={`border border-amber-950 rounded m-2 mt-1 bg-orange-300 text-center w-[${topWidth}]`}>
			<h2>A</h2>
			<B />
		</div>
	);
}
function B() {
	const { role } = useRole();
	return (
		<div className={`border border-amber-950 rounded m-2 mt-1 bg-orange-300 text-center w-[${topWidth - 20}]`}>
			<h2>B</h2>
			<p>Role: {role}</p>
			<C />
		</div>
	);
}
function C() {
	return (
		<div className={`border border-amber-950 rounded m-2 mt-1 bg-orange-300 text-center w-[${topWidth - 40}]`}>
			<h2>C</h2>
		</div>
	);
}
function D() {
	const { role, setRole } = useRole();
	return (
		<div className={`border border-amber-950 rounded m-2 mt-1 bg-orange-300 text-center w-[${topWidth}]`}>
			<h2 style={{ margin: 0 }}>D</h2>
			<p style={{ margin: 0 }}>Simulates a login that provides a role</p>
			<select defaultValue={role} onChange={(evt) => setRole(evt.target.value)}>
				<option value="anonymous">anonymous</option>
				<option value="USER">USER</option>
				<option value="ADMIN">ADMIN</option>
			</select>
			<E />
		</div>
	);
}
function E() {
	return (
		<div className={`border border-amber-950 rounded m-2 mt-1 bg-orange-300 text-center w-[${topWidth - 20}]`}>
			<h2>E</h2>
			<F />
		</div>
	);
}
function F() {
	const { role } = useRole();
	return (
		<div className={`border border-amber-950 rounded m-2 mt-1 bg-orange-300 text-center w-[${topWidth - 40}]`}>
			<h2>F</h2>
			<p>Role: {role}</p>
		</div>
	);
}
export default ContextDemoApp;