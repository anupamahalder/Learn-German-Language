import { NavLink } from "react-router-dom";

export const Headers = () =>{
    return <header>
        <div className="container p-2 center">
            <div className="flex items-end md:items-center bg-yellow-500 p-8">
                <div className="Logo">
                    <NavLink to="/">
                        <h1>Learn German Language</h1>
                    </NavLink>
                </div>
                <div className="flex-1">
                    <nav className="flex">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="learn">Learn</NavLink>
                        </li>
                        <li>
                            <NavLink to="blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="contact">Contact</NavLink>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    </header>;
}