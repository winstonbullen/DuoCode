import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/dnd" activeStyle>
                        Drag and Drop
                    </NavLink>
                    <NavLink to="/multiplechoice" activeStyle>
                        Multiple Choice
                    </NavLink>
                    <NavLink to="/shortanswer" activeStyle>
                        Short Answer
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;