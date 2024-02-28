import { User } from "../data/data.ts";

function UserTable({ users }: { users: User[] }) {
	return (
		<table className="table-auto w-full">
			<thead>
			<tr className="border-y-2">
				<th>ID</th>
				<th>Name</th>
				<th>Email</th>
				<th>Active</th>
				<th>#</th>
			</tr>
			</thead>
			<tbody>
			{users.map((user, index) => <TableRow key={index} user={user} />)}
			</tbody>
		</table>
	);
}

function TableRow({ user }: { user: User }) {
	return (
		<tr className="border-b">
			<td className="p-2">{user.id}</td>
			<td>{user.name}</td>
			<td>{user.email}</td>
			<td>{user.isActive ? "Yes" : "No"}</td>
			<td>
				<button className="bg-red-500 p-1 rounded text-slate-50 hover:bg-red-600">Delete</button>
			</td>
		</tr>
	);
}

export default UserTable;