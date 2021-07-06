import { Component } from "react";
import "./BestClub.css";

// this is the state and it is what we need to manage the parameters
interface ClubState {
    team: string;
}

class BestClub extends Component<{}, ClubState> {

    // private team = "Barcelona";
    public constructor(state: ClubState) {
        super(state)
        this.state = {"team":"Barcelona"}; // Initializing state
    }

    private showTheBestClub = () => {
        this.setState({"team": "Argentina"});
        alert(this.state.team);
    }

    public render(): JSX.Element {
        return (
            <div className="BestClub Box">
                <h3>The Best Club</h3>
				<button onClick={this.showTheBestClub}>Yalla</button><br />
                <span>{this.state.team}</span>
            </div>
        );
    }
}

export default BestClub;


// 3:08