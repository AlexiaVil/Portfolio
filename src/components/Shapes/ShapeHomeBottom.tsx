"use client";

import { useAnimationFrame } from "framer-motion";
import { SVGProps, useRef } from "react";
import styles from "./ShapeHomeTop.module.css";
import { applyPointTransform, lerp } from "./utils";
import { useWindowSize } from "@/hooks/useWindowSize";

let dJoinPos = "897.663 456.817";
let d =
	"938.132 565.785 1125.22 608.045 1111.27 723.44C1098.4 829.932 937.314 837.533 845.045 892.18C768.864 937.299 702.782 996.964 616.43 1016.51C523.638 1037.52 407.019 1071.6 336.936 1007.22C262.38 938.735 344.505 797.156 286.957 713.859C223.1 621.43 41.1767 642.011 10.0426 534.064C-18.0814 436.554 108.18 363.491 160.898 276.795C216.925 184.657 224.196 31.023 329.632 8.49299C442.172 -15.5551 511.386 147.464 622.297 178.201C715.043 203.904 837.304 99.4758 904.968 167.939C974.074 237.861 863.434 364.651";

const ShapeHomeTop = (props: SVGProps<SVGSVGElement>) => {
	const ref = useRef<SVGPathElement | null>(null);
	const [x] = useWindowSize();

	const rawProgress = Math.max(0, x - 600) / 1200;
	const progress = Math.max(0, Math.min(1, rawProgress));
	const leftTranslate = lerp(750, 0, progress);

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
			width="1319"
			height="1251"
			viewBox="-100 -100 1219 1351"
			className={styles.shapeBottom}
			style={{ transform: `translateX(${leftTranslate}px)` }}
			{...props}
		>
			<path
				ref={ref}
				stroke="#09BC8A"
				strokeWidth={12}
				d={`M${dJoinPos}C${d} ${dJoinPos}Z`}
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default ShapeHomeTop;
