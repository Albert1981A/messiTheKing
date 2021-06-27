import "./Total.css";

function Total(): JSX.Element {
    const numOfGoals = 774;
    return (
        <div className="Total Box">
            <h2>Number of Goals</h2>
            <p>Lionel Messi scored {numOfGoals} goals so far</p>
        </div>
    );
}

export default Total;
