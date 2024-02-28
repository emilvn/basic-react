import { PropsWithChildren } from "react";

interface MenuButtonProps extends PropsWithChildren {
	onClick: () => void;
}

function MenuButton({ children, onClick }: MenuButtonProps) {
	return (
		<button className="w-full bg-blue-500 rounded-lg p-2 hover:bg-blue-600 text-slate-50" onClick={onClick}>
			{children}
		</button>
	);
}

export default MenuButton;