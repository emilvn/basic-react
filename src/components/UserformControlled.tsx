import { BaseProps } from "../types/types.ts";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { User } from "../data/data.ts";


export type AddEditDeleteFunction = (user: User, isDelete: boolean | undefined) => void;


type UserFormProps = BaseProps & {
	onSubmitUser: AddEditDeleteFunction;
	defaultUser: User | undefined;
};


const emptyUser: User = { name: "", email: "", isActive: false };

function UserFormControlled({
								onSubmitUser,
								defaultUser
							}: UserFormProps) {
	const [user, setUser] = useState<User>({ ...emptyUser });


	useEffect(() => {
		if (defaultUser) {
			setUser(defaultUser);
		} else {
			// Reset to initial state if defaultUser is undefined
			setUser({ ...emptyUser });
		}
	}, [defaultUser]);


	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUser((prev) => ({
			...prev,
			[event.target.name]:
				event.target.type === "checkbox" ? event.target.checked : event.target.value
		}));
	};


	const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const isDelete = e.currentTarget.id === "delete-btn" ? true : undefined;
		onSubmitUser(user, isDelete);
		setUser({ ...emptyUser });
	};
	return (
		<>
			<h2 className="m-0">{!user.id ? "Add User" : "Edit User"}</h2>
			<form>
				ID: {user.id}
				<br />
				First Name: <input name="name" className="border" onChange={handleChange} value={user.name} />
				<br />
				Email: <input name="email" className="border" onChange={handleChange} value={user.email} />
				<br />
				Active:
				<input type="checkbox" className="border" name="isActive" onChange={handleChange} checked={user.isActive} />
			</form>
			<br />
			<button onClick={onSubmit} className="m-1 bg-blue-500 text-slate-50 hover:bg-blue-600 rounded-lg p-2">{!user.id ? "Add User" : "Update User"} </button>
			{user.id && (
				<button className="m-1 bg-red-500 text-slate-50 hover:bg-red-600 rounded-lg p-2" type="button" id="delete-btn" onClick={onSubmit}>
					Delete User
				</button>
			)}
			{
				<button
					className="m-1 bg-slate-500 text-slate-50 hover:bg-slate-600 rounded-lg p-2"
					onClick={(e) => {
						e.preventDefault();
						setUser({ ...emptyUser });
					}}
				>
					Cancel
				</button>
			}
			{/* <p style={{ fontSize: "small" }}>{JSON.stringify(user)}</p> */}
		</>
	);
}

export default UserFormControlled;
