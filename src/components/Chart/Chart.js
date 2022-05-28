import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
	const dataPointVals = props.dataPoints.map((dPoint) => dPoint.value);
	const totalMax = Math.max(...dataPointVals);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
