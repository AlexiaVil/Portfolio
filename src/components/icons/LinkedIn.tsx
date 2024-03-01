import { SVGProps } from "react";

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 22 21"
		{...props}
	>
		<path
			fill="#CDE6F5"
			fillRule="evenodd"
			d="M4.99 21V6.83H.28V21h4.7ZM2.63 4.9c1.65 0 2.67-1.1 2.67-2.45C5.27 1.05 4.28 0 2.66 0 1.06 0 0 1.06 0 2.45 0 3.8 1.02 4.9 2.6 4.9h.03ZM7.6 21s.07-12.84 0-14.17h4.71V8.9h-.03a4.7 4.7 0 0 1 4.28-2.4c3.1 0 5.42 2.03 5.42 6.39V21h-4.7v-7.58c0-1.9-.7-3.2-2.4-3.2-1.3 0-2.07.87-2.41 1.72-.13.3-.16.72-.16 1.15V21H7.6Z"
			clipRule="evenodd"
		/>
	</svg>
);

export default LinkedInIcon;
