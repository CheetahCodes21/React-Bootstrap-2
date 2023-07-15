import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <>
    <nav class="navbar  navbar-expand bg-dark navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/contact"}>Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/about"}>About</Link>
                    </li>
                </ul>
                <Link className='btn btn-dark text-dark mx-1' to="/login">Login</Link>
                <Link className='btn btn-dark text-dark mx-1' to="/signup">SignUp</Link>
            </div>
        </nav>
    </>
    )
}

export default NavBar