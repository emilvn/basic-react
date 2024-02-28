interface ProfileProps {
	name: string;
	email: string;
	isActive: boolean;
	singleLine?: boolean;
}

function Profile({ name, email, isActive, singleLine }: ProfileProps) {
	return (<>
			{singleLine && <div className="flex">
				<p>{name}, {email}, {isActive? "Is Active": "Not Active"} </p>
			</div>
			}
			{
				!singleLine &&
				<div className="">
					<h3 className="font-bold">{name}</h3>
					<p>Email: {email}</p>
					<p>Active: {isActive ? "Yes" : "No"}</p>
				</div>}
		</>
	);
}

export default Profile;