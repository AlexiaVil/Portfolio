"use client";

import { useAnimationFrame } from "framer-motion";
import { SVGProps, useRef } from "react";
import styles from "./ShapeHomeTop.module.css";
import { applyPointTransform, lerp } from "./utils";
import { useWindowSize } from "@/hooks/useWindowSize";

let dJoinPos = "553.041 842.334";
let d =
	"450.607 879.196 409.249 1054 301.315 1039.84C201.707 1026.77 196.122 875.844 145.823 788.913C104.294 717.14 49.0468 654.686 31.559 573.631C12.7671 486.531 -18.0358 376.993 42.9219 311.973C107.77 242.803 239.577 321.06 318.133 267.959C405.301 209.037 387.758 38.4694 489.147 10.3397C580.733 -15.0705 647.955 103.869 728.645 154.065C814.398 207.411 958.208 215.682 978.304 314.638C999.754 420.261 846.428 483.529 816.586 587.104C791.633 673.717 888.266 789.208 823.506 851.925C757.367 915.977 639.681 811.156";

const ShapeHomeTop = (props: SVGProps<SVGSVGElement>) => {
	const ref = useRef<SVGPathElement | null>(null);

	const [x] = useWindowSize();

	const rawProgress = Math.max(0, x - 600) / 1200;
	const progress = Math.max(0, Math.min(1, rawProgress));
	const leftTranslate = lerp(-750, 0, progress);

	useAnimationFrame((ts) => {
		if (
			!ref.current ||
			!ref.current.attributes ||
			!ref.current.attributes.getNamedItem("d") ||
			ref.current.attributes.getNamedItem("d") === null
		) {
			return;
		}

		const computedJoinPos = dJoinPos
			.split(" ")
			.map((x, i) => {
				return applyPointTransform(x, i, ts);
			})
			.join(" ");
		const computedPath = d
			.split(" ")
			.map((x, i) => {
				if (x.includes("C")) {
					const split = x.split("C");
					return `${applyPointTransform(split[0], i, ts)}C${applyPointTransform(split[1], i, ts)}`;
				}

				if (/[a-zA-Z]+/.test(x)) {
					return x;
				}

				return applyPointTransform(x, i, ts);
			})
			.join(" ");

		ref.current.setAttribute(
			"d",
			`M${computedJoinPos}C${computedPath} ${computedJoinPos}Z`,
		);
	});

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			width="1287"
			height="1247"
			viewBox="-100 -100 1187 1247"
			className={styles.shape}
			style={{ transform: `translateX(${leftTranslate}px)` }}
			{...props}
		>
			<path
				ref={ref}
				stroke="#CDE6F5"
				strokeWidth={12}
				d={d}
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default ShapeHomeTop;
