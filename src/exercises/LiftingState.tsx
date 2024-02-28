import { BaseProps } from "../types/types.ts";
import { User, users as usersDB, getNextId } from "../data/data";
import { useState } from "react";
import UserTableWithButtons from "../components/UserTableWithButtons";
import UserFormControlled, {
	AddEditDeleteFunction,
} from "../components/UserformControlled";


export default function LiftingState({ title }: BaseProps) {
	const [users, setUsers] = useState(usersDB);
	const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);


	const addEditDeleteUser: AddEditDeleteFunction = (user, isDelete) => {
		if(isDelete){
			setUsers(users.filter((u) => u.id !== user.id));
		}
		else if(user.id){
			const index = users.findIndex((u) => u.id === user.id);
			const newUsers = [...users];
			newUsers[index] = user;
			setUsers(newUsers);
		}
		else{
			user.id = getNextId();
			setUsers([...users, user]);
		}
	};


	const editUser = (id: number) => {
		const user = users.find((u) => u.id === id);
		if (user) {
			setUserToEdit(user);
		}
	};
	return (
		<>
			<div className="w-full">
				<h2 className="text-2xl m-0">{title}</h2>
				<p className="m-0">
					This is where ALL the users live (Single Source of truth).{" "}
					<em>User Count:</em> <b>{users.length}</b>
				</p>
				<p><em>User To Edit:</em> <b>{JSON.stringify(userToEdit)}</b></p>


				<div className="flex w-full">
					<div className="flex-[3] mr-5 border">
						<UserTableWithButtons users={users} editUser={editUser} />
					</div>
					<div className="flex-[2] border p-3 text-left">
						<UserFormControlled
							title="Add User"
							onSubmitUser={addEditDeleteUser}
							defaultUser={userToEdit}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
