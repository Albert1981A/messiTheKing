import { Component } from "react";
import Flag from "../../LayoutArea/Flag/Flag";
import Goals from "../Goals/Goals";
import "./Total.css";
interface goals {
    numOfGoals: number;
}

class Total extends Component<{}, goals> {

    public constructor(state: goals) {
        super(state)
        this.state = {"numOfGoals": 0};
    }

    public showGoals = () => {
        this.setState({"numOfGoals": 472});
    }

    public render(): JSX.Element {
        
        return (
            <div className="Total Box3">
                <div className="area1">
                <h3>Total Number of Goals</h3>
                <button onClick={this.showGoals}>Show number of Goals</button>
                </div>
                
                <p className="area2">
                    Lionel Messi scored {this.state.numOfGoals} goals so far
                </p>
                <div className="area3">
                    <Flag />
                </div>
            </div>
        );
    }
}

// function Total(): JSX.Element {
//     const numOfGoals = 774;
//     return (
//         <div className="Total Box3">
//             <h3 className="area1">Total Number of Goals</h3>            
//             <p className="area2">
//                 Lionel Messi scored {numOfGoals} goals so far
//             </p>
//             <div className="area3">
//                 <Flag/>
//             </div>
//         </div>
//     );
// }



export default Total;


// 0:55