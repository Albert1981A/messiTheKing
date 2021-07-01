import "./Sales.css";
interface salesProps{
    category ? : string, 
    percent: number
}

function Sales(props: salesProps): JSX.Element {
    return (
        <div className="Sales Box2">
            <span>Only for Today!!! &nbsp; All {props.category || "items"} with discount of:&nbsp; {props.percent}%</span>
        </div>
    );
}

export default Sales;
