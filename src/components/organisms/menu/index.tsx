import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

type Props = {
    listNavLinks
}

const Menu = ({ listNavLinks }: Props) => {
    return (
        <nav id="menu">
            <Navbar variant="dark">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {listNavLinks.map((navLinkItem, index) => (
                            <Nav.Link
                                key={index}
                                href={navLinkItem.navLink.href}
                                className="text-uppercase font-weight-bold mx-auto"
                                style={{
                                    padding: '10px 20px',
                                    color: '#FFF'
                                }}
                            >
                                {navLinkItem.navLink.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    )
}

export default Menu
