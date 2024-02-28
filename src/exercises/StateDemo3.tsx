import { BaseProps } from "../types/types.ts";
import { users as usersFromDB, User } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
type Props = BaseProps;


export default function StateDemo3({ title }: Props) {
	const [users, setUsers] = useState<User[]>(usersFromDB || []);
	//Derived value. No need for a useState here
	const id = users.reduce((max, user) => (user.id || 0) > max ? (user.id || 0) : max, users[0].id || 0);
	if(!id) return null;
	const nextId = 1 + id;


	const onSubmitUser = (newUser: User) => {
		newUser.id = nextId;
		users.push(newUser);
		setUsers([...users]);
	};


	return (
		<>
			<h2>{title}</h2>
			<UserTable users={users} />
			<UserForm title="Add User" onSubmitUser={onSubmitUser} />
		</>
	);
}
