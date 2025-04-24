import { Outlet, Link } from "react-router-dom";
import Login from "./Login";

function Layout({ isAuthenticated, user, logout }) {
    return (
        <>
            <header>
                {
                    isAuthenticated && (
                        <div class="container bg-light">
                            <div class="row">
                                <nav className="col-md-8 navbar navbar-expand-lg navbar-light">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/home">Home</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="col-md-4 d-flex justify-content-end  p-3">{user} (<Link className="link-offset-3" onClick={logout} >Sign out</Link>)</div>
                            </div>
                        </div>
                    )
                }
            </header>
            <main>
                {isAuthenticated ? (<Outlet />) : (<Login />)}
            </main>

        </>
    )
}

export default Layout;