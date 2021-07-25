import './Char.css';
import ChartBar from './ChartBar.js';

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(datapoint => datapoint.value);
    const totalMaxValue = Math.max(...dataPointsValue);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar value={dataPoint.value} maxValue={totalMaxValue} label={dataPoint.label} key={dataPoint.label} />
            )}
        </div>
    )
};


export default Chart;