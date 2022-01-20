import ChartBar from "./ChartBar";

const Chart = props => {

    return (
        <div className='card'>
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={null}
                                                         labal={dataPoint.label}/>)}
        </div>
    )
}
export default Chart