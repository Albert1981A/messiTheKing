
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../../HomeArea/Main/Main";
import Menu from "../Menu/Menu";
import "./Layout.css"

/*export*/ function Layout(): JSX.Element { // implement to: JSX.Element = The Component UI
    return (
        <section>
            <header>
                <Header />
            </header>
            <aside>
                <Menu />
            </aside>
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    );
}
export default Layout;