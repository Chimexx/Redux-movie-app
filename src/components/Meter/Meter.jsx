import React from "react";

const Meter = ({ rating }) => {
	let percent = 0;
	let color = "";

	if (rating === 0) {
		percent = 0;
		color = "#ccc";
	}
	if (rating > 0 && rating <= 2) {
		percent = 0.2;
		color = "#0078bc";
	}
	if (rating > 2 && rating <= 4) {
		percent = 0.4;
		color = "#00e1ff";
	}
	if (rating > 4 && rating <= 6) {
		percent = 0.6;
		color = "#fdec01";
	}
	if (rating > 6 && rating <= 8) {
		percent = 0.8;
		color = "#b7fa00";
	}
	if (rating > 8 && rating <= 10) {
		percent = 1;
		color = "#00ff00";
	}

	var r = Math.ceil(3);
	let w = percent ? Math.max(6, 60 * Math.min(percent, 1)) : 0;
	let style = { transition: "width 500ms, fill 250ms" };

	return (
		<div>
			<svg width="60" height="6" aria-label={null}>
				<rect width="60" height="6" fill="#ccc" rx={r} ry={r} />
				<rect width={w} height="6" fill={color} rx={r} ry={r} style={style} />
			</svg>
		</div>
	);
};

export default Meter;
