import { ImgHTMLAttributes } from "react";

export const Image = ({
	alt,
	...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
	return <img {...props} alt={alt} />;
};
