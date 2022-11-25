import { AnchorHTMLAttributes, ReactElement } from "react";

export const Link = ({
	children,
	...props
}: AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement => (
	<a {...props}>{children}</a>
);
