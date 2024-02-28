import { BaseProps } from "../types/types.ts";
import Profile from "../components/Profile";
import { useState } from "react";


function PropsDemo({ title }: BaseProps) {
	const [showHorizontal, setShowHorizontal] = useState(false);
	const profiles = [{
		name: "Max Power",
		email: "mp@email.com",
		isActive: true
	}, {
		name: "John Doe",
		email: "jd@email.com",
		isActive: false
	},
		{
			name: "Tom Doe",
			email: "td@email.com",
			isActive: true
		}]

	return (
		<>
			<h2 className="text-2xl">{title}</h2>
			Direction: <input type="checkbox" checked={showHorizontal} onChange={()=>setShowHorizontal(!showHorizontal)}/>
			{profiles.map((profile, index) => <Profile key={index} name={profile.name} email={profile.email} isActive={profile.isActive} singleLine={showHorizontal} />)}
		</>
	);
}

export default PropsDemo;