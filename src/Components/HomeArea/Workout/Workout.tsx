import "./Workout.css";

function Workout(): JSX.Element {
    return (
        <div className="Workout Box">
            <h3>Messi Workout</h3>
			{isSummer() ? "Swimming and matkot" : isWinter() ? "Running in the GYM." : "Doing TRX and meditation"}
        </div>
    );

    // ternary operator:
    // if true => do this
    // {isSummer() && <span>Go to the beach</span>}
    // if false => do this
    // {isSummer() || <span>Take an umbrella</span>}

    function isWinter():boolean {
        const date = new Date();
        const month = date.getMonth() + 1;
        console.log(month);
        return month === 12 || month === 1 || month === 2;
    }

    function isSummer():boolean {
        const date = new Date();
        const month = date.getMonth() +1;
        console.log(month);
        return 6 <= month && month <= 8;
    }

}

export default Workout;
