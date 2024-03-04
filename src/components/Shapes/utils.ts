export function applyPointTransform(value: string, index: number, ts: number) {
	const speed = 1000;
	const magnitude = 10;
	const offset = 100;

	const parsedValue = parseFloat(value);

	if (index % 2 === 0) {
		return (
			parsedValue +
			Math.sin((ts + index * offset) / speed) * magnitude
		).toFixed(4);
	}

	return (
		parsedValue +
		Math.cos((ts + index * offset) / speed) * magnitude
	).toFixed(4);
}

export function lerp(start: number, end: number, t: number) {
	return start * (1 - t) + end * t;
}
