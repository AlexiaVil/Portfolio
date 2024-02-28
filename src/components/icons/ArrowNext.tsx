import { SVGProps } from "react";

const ArrowNextIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 12 15"
		{...props}
	>
		<path
			stroke={props.color || "#FFFF82"}
			strokeLinecap="square"
			strokeWidth={2}
			d="m2 1.5 8 6-8 6"
		/>
	</svg>
);

export default ArrowNextIcon;
