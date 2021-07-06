import "./Flag.css";
import flagImage from "../../../Assets/images/newFlag.jpg"

function Flag(): JSX.Element {
    return (
        <div className="Flag">
			<img id="newFlag" src={flagImage} alt="Flag Image" />
        </div>
    );
}

export default Flag;
