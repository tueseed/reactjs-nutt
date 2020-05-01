import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
                            // const [collapsed, setCollapsed] = useState(true)
                            // const toggleNavbar = () => setCollapsed(!collapsed)
                            return (
                                <div>
                                <Navbar color="faded" className="bg-dark text-white">
                                    <NavbarBrand href="/" className="mr-auto bg-dark text-white">THE NOTE</NavbarBrand>
                                </Navbar>
                                </div>
                            )
}

export default Header