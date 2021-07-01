import "./Goals.css";
interface DetailsProps{
    team: string,
    goals: number
}

function Goals(props: DetailsProps): JSX.Element {
    return (
        <div className="Goals Box2">
            <span>In the team "{props.team}" he score - {props.goals} goals.</span>
        </div>
    );
}

export default Goals;
