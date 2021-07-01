import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <br />
            <a className="MenuA menuA-1" href="https://en.wikipedia.org/wiki/Lionel_Messi#Club_career" target="_blank">Clubs</a>
            <br />
            <a className="MenuA menuA-2" href="https://en.wikipedia.org/wiki/Lionel_Messi#Club_career" target="_blank">Goals</a>
            <br />
            <a className="MenuA menuA-3" href="https://en.wikipedia.org/wiki/Lionel_Messi#Club_career" target="_blank">Titles</a>
        </div>
    );
}

export default Menu;
