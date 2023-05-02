import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/dnd">
                        Drag and Drop
                    </NavLink>
                    <NavLink to="/multiplechoice">
                        Multiple Choice
                    </NavLink>
                    <NavLink to="/shortanswer">
                        Short Answer
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;