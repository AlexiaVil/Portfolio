import { SVGProps } from "react";

const EnvelopeIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 28 21"
		{...props}
	>
		<path
			fill="#CDE6F5"
			d="M27.8 2.85A3.53 3.53 0 0 0 24.35 0H4.5A3.51 3.51 0 0 0 .97 3.53v13.94a3.5 3.5 0 0 0 1.28 2.72c.63.52 1.43.81 2.25.81h19.84a3.52 3.52 0 0 0 3.22-2.08l.03-.05c.19-.44.29-.91.29-1.4V3.53c0-.23-.03-.46-.07-.68Zm-25-.6.2-.23c.4-.4.93-.62 1.5-.62h19.84a2.1 2.1 0 0 1 1.7.85l.15.2-10.58 9.23a1.8 1.8 0 0 1-2.37 0L2.66 2.46l.14-.2ZM2.38 17.6l-.01-.12V3.82L10.59 11l-8.14 7.1-.07-.5Zm23.02 1.73c-.32.18-.68.28-1.06.28H4.5c-.37 0-.74-.1-1.05-.28l-.34-.2 8.4-7.32.93.8a3.03 3.03 0 0 0 3.97 0l.92-.8 8.4 7.33-.33.19Zm1.08-1.85-.01.12-.07.5-8.14-7.1 8.22-7.16v13.64Z"
		/>
	</svg>
);

export default EnvelopeIcon;
