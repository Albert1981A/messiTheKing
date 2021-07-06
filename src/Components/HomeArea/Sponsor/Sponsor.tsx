import { Component } from "react";
import "./Sponsor.css";

interface mySponsor {
    sponsor: string;
}

class Sponsor extends Component<{}, mySponsor> {

    public constructor(state: mySponsor) {
        super(state);
        this.state = {"sponsor": "Adidas"};
    }

    private showSponsor = () => {
        // if (this.state.sponsor === "Nike"){
        //     this.setState({"sponsor": "Adidas"});
        // } else if (this.state.sponsor === "Adidas") {
        //     this.setState({"sponsor": "Nike"});
        // }
        (this.state.sponsor === "Nike") ? this.setState({"sponsor": "Adidas"}) : this.setState({"sponsor": "Nike"});
    }

    public render(): JSX.Element {
        return (
            <div className="Sponsor Box">
                <h3>Messi's Sponsor</h3>
                <button onClick={this.showSponsor}>Change Sponsor</button><br />
                <span>{this.state.sponsor}</span>
            </div>
        );
    }
}

export default Sponsor;
