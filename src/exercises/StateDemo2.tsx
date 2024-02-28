import { useState, ChangeEvent } from "react";
import { BaseProps } from "../types/types.ts";
import { User } from "../data/data";

function StateDemo2({ title }: BaseProps) {
	const [user,setUser] = useState<User>({
		id: 1,
		name: "Max Power",
		email: "max.power@email.com",
		isActive: true,
	});


	function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
		setUser({
			...user,
			name: e.target.value,
		});
	}

	function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
		setUser({
			...user,
			email: e.target.value,
		});
	}

	function handleActiveChange(e: ChangeEvent<HTMLInputElement>) {
		setUser({
			...user,
			isActive: e.target.checked,
		});
	}


	return (
		<>
			<h2 className="text-2xl">{title}</h2>
			<div>
				<p>ID: {user.id}</p>{" "}
			</div>
			<div className="flex flex-col">
				First Name: <input className="border" name="name" value={user.name} onChange={handleNameChange} />
				Email: <input className="border" name="email" value={user.email} onChange={handleEmailChange} />
				<span>Active: <input type="checkbox" checked={user.isActive} name="isActive" onChange={handleActiveChange} /></span>
			</div>
			<p className="mt-10"> {JSON.stringify(user)} </p>
		</>
	);
}

export default StateDemo2;