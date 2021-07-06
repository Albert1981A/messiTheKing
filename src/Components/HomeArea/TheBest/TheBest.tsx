import { Component } from "react";
import "./TheBest.css";

// function TheBest(): JSX.Element {
//     function showTheBest(){
//         alert("Messi");
//     }
//     return (
//         <div className="TheBest Box">
//             <h3>The Best player in the world</h3>
// 			<button onClick={showTheBest}>Yalla</button>
//         </div>
//     );
// }

class TheBest extends Component {

    private player = "Messi is The King";

    // private showTheBest() {
    //     alert(this.player);
    // }

    private showTheBest = () => {
        alert(this.player);
    }

        public render(): JSX.Element {
        return (
            <div className="TheBest Box">
                <h3> Events: The Best player in the world</h3>
                <button onClick={this.showTheBest}>Yalla</button>
            </div>
        );
    }
}

// 2:10

export default TheBest;
