import { useEffect, useState } from "react";
import { BaseProps } from "../types/types.ts";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;


type User = { id: number; name: string };


//Utility function to fetch a user from the server
function fetchUser(userId: number, options?: object): Promise<User> {
	return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) => res.json());
}


function FetchDemo1({ title }: BaseProps) {
	const [userId] = useState(1);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const fetchNextUser = async () => {
		if(!user) return;
		const nextUser = user?.id + 1 <= 15 ? user.id + 1 : 1;
		//Do not set call setUserId here it will cause an extra render
		setLoading(true);
		const theUser = await fetchUser(nextUser);
		setLoading(false);
		setUser(theUser);
	};

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		fetchUser(userId, {signal: controller.signal}).then((user) => {
			setUser(user);
			setLoading(false);
		});

		return () => controller.abort();

	}, [userId]);

	return (
		<>
			<h2 className="text-2xl">{title}</h2>
			{user && JSON.stringify(user)}
			{loading && <p>Loading next...</p>}
			<br />
			<button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
					onClick={fetchNextUser}>Next User</button>
		</>
	);
}

export default FetchDemo1;