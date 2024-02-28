import UserForm from "../components/UserForm";
import { BaseProps } from "../types/types.ts";
import { useState } from "react";
import { User } from "../data/data";


export default function FormUncontrolled({ title }: BaseProps) {
	const [submittedUser, setSubmittedUser] = useState<User | null>();


	const onSubmitUser = (newUser: User) => {
		setSubmittedUser(newUser);
	};


	return (
		<><div className="p-4 bg-yellow-400 rounded-lg flex flex-col">
			<h2 className="text-2xl">{title}</h2>
			<div className="bg-blue-300 m-10 p-2 rounded-lg">
				<UserForm title="User Form Uncontrolled" onSubmitUser={onSubmitUser} />
			</div>
			<p>{JSON.stringify(submittedUser)}</p>
		</div>
		</>
	);
}
