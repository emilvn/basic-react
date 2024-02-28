import { BaseProps } from "../types/types.ts";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";


type UserFormProps = BaseProps & {
	onSubmitUser: (user: User) => void;
};


export default function UserForm({ title, onSubmitUser }: UserFormProps) {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const isActiveRef = useRef<HTMLInputElement>(null);
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newUser: User = {
			id: -1,
			name: nameRef.current!.value,
			email: emailRef.current!.value,
			isActive: isActiveRef.current!.checked,
		};
		onSubmitUser(newUser);
	};


	return (
		<>
			<h2 className="text-xl">{title}</h2>
			<form onSubmit={onSubmit} className="flex flex-col gap-1">
				First Name: <input name="name" ref={nameRef} />
				Email: <input name="email" ref={emailRef}/>
				<span>Active: <input type="checkbox" name="isActive" ref={isActiveRef} /></span>
				<button className="bg-blue-500 hover:bg-blue-600 w-1/2 rounded-lg text-slate-50" type="submit">Add User</button>
			</form>
		</>
	);
}
