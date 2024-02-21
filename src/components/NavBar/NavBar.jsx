import "./NavBar.scss"

const NavBar = () => {
    return (
        <div className="nav-bar-container">
            <header>
            <nav>
                <h1><a className="logo" href="/">MARVEL TEAM BUILDER</a></h1>
                <div>
                    <a className="button-link" href="/">Home</a>
                    <a className="button-link" href="/team">Team</a>
                </div>
            </nav> 
            </header>
        </div>
    );
}

export default NavBar;