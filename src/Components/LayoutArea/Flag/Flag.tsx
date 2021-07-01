import "./Flag.css";
import flagImage from "../../../Assets/images/flag.png"

function Flag(): JSX.Element {
    return (
        <div className="Flag">
			<img src={flagImage} alt="Flag Image" />
        </div>
    );
}

export default Flag;
