import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="/" className="navbar-brand">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a href='/' className="nav-link">Search <span className="sr-only">(current)</span></a>
                    </li>
                        <li className="nav-item">
                        <a href='/saved' className="nav-link">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;