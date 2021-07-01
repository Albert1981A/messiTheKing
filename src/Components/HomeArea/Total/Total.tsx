import "./Total.css";

function Total(): JSX.Element {
    const numOfGoals = 774;
    return (
        <div className="Total Box3">
            <h3 className="area1">Total Number of Goals</h3>            
            <p className="area2">Lionel Messi scored {numOfGoals} goals so far</p>
        </div>
    );
}

export default Total;


// 0:55