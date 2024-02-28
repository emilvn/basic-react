interface ImageButtonProps {
	image: string;
	onClick: () => void;
}

function ImageButton({ image, onClick }: ImageButtonProps) {
	return <img
		src={image}
		alt={""}
		onClick={onClick}
		className="p-1 w-10 h-10 cursor-pointer hover:text-slate-50 hover:rounded hover:shadow-lg"
	/>;
}

export default ImageButton;