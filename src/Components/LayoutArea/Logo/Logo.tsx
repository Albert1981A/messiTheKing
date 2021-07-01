import "./Logo.css";
import logoImage from "../../../Assets/images/messi.png";
import { Component } from "react";

// function component:

// function Logo(): JSX.Element {
//     return (
//         <div className="Logo">
// 			<img src={logoImage} alt="Messi Image"/>
//         </div>
//     );
// }

// class component:

class Logo extends Component {
    public render() : JSX.Element {
        return (
            <div className="Logo">
                <img src={logoImage} alt="Messi Image"/>
            </div>
        );
    }
}

export default Logo;

// 2:02
