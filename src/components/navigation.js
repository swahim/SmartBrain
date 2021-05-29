const Navigation = ({routeChangeSignIn}) => {
    return (
        <header>
        <nav className="topBar">
            <button className="signOutButton" onClick={() => routeChangeSignIn('signin')}>Sign Out</button>
        </nav>
        </header>
    );
}
 
export default Navigation;