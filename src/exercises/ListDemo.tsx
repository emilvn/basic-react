import { BaseProps } from "../types/types.ts";
import { users } from "../data/data";
import UserTable from "../components/UserTable.tsx";

interface Props extends BaseProps{}
export default function ListDemo({ title }: Props) {
	return (
		<>
			<h2 className="text-2xl">{title}</h2>
			<UserTable users={users} />
		</>
	);
}
