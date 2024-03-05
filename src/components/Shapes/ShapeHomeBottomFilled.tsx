"use client";

import { useAnimationFrame } from "framer-motion";
import { SVGProps, useRef } from "react";
import styles from "./ShapeHomeTop.module.css";
import { applyPointTransform, lerp } from "./utils";
import { useWindowSize } from "@/hooks/useWindowSize";

let dJoinPos = "474.769 0.889211";
let d =
	"574.534 3.04173 653.409 78.1902 741.854 124.39C834.339 172.7 990.804 176.325 1007.72 279.277C1027.6 400.251 817.584 464.345 817.854 586.94C818.125 710.003 1025.92 773.481 1009.08 895.387C994.732 999.204 850.325 1031.16 751.604 1066.38C662.964 1098 562.046 1121.21 474.769 1086C391.574 1052.44 382.403 926.079 302.542 885.212C215.595 840.719 74.2903 930.222 16.5 851.491C-38.2677 776.877 61.714 676.867 83.6031 586.94C100.009 519.539 112.759 454.914 129.421 387.577C152.555 294.085 136.789 184.556 200.946 112.719C267.755 37.9128 374.489 -1.27445";

const ShapeHomeTop = (props: SVGProps<SVGSVGElement>) => {
	const ref = useRef<SVGPathElement | null>(null);
	const [x] = useWindowSize();

	const rawProgress = Math.max(0, x - 600) / 1200;
	const progress = Math.max(0, Math.min(1, rawProgress));
	const leftTranslate = lerp(750, 0, progress);

	useAnimationFrame((ts) => {
		if (
			window.innerWidth < 600 ||
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
			className={styles.shapeBottomFilled}
			style={{ transform: `translateX(${leftTranslate}px)` }}
			{...props}
		>
			<path
				ref={ref}
				fill="#CDE6F5"
				strokeWidth={12}
				d={`M${dJoinPos}C${d} ${dJoinPos}Z`}
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default ShapeHomeTop;
