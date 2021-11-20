import { Spin } from "./Spinner.styles";
import { MagicSpinner } from "react-spinners-kit";

import React from "react";

const Spinner = () => {
	return (
		<Spin>
			<MagicSpinner />
		</Spin>
	);
};

export default Spinner;
