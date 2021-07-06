import BestClub from "../BestClub/BestClub";
import Clubs from "../Clubs/Clubs";
import Goals from "../Goals/Goals";
import Sales from "../Sales/Sales";
import Sponsor from "../Sponsor/Sponsor";
import TheBest from "../TheBest/TheBest";
import Total from "../Total/Total";
import Workout from "../Workout/Workout";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main main1">
            {/* <img src="https://media.giphy.com/media/TjAcxImn74uoDYVxFl/giphy.gif" alt="Cannot load image" /> */}
            
            {/* Interpolation */}
            <Total/>

            {/* Conditional Rendering */}
            <Workout/>

            {/* Displaying list */}
            <Clubs/>

            {/* Props */}
            <h3>Messi's Goals</h3>
            <Goals team="Barcelona" goals={223}/>
            <Goals team="Barcelona B" goals={207}/>

            {/* Props (discount) */}
            <h3>Special Sales</h3>
            <Sales category="Soccer shoes" percent={20}/>
            <Sales percent={10}/>

            {/* Events - onClick */}
            <TheBest/>

            {/* Events - onClick */}
            <BestClub/>

            {/* Events - onClick */}
            <Sponsor/>

        </div>
    );
}

export default Main;
