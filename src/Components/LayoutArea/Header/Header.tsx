import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1 className="headLine">Lionel Messi the King</h1>
            <Logo/>
        </div>
    );
}

export default Header;
