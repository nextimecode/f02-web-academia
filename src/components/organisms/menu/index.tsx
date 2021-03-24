import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLinkProps } from '../../../types/types'

type Props = {
    urlLogo: string
    listNavLinks: Record<string, NavLinkProps>[]
}

const Menu = ({ urlLogo, listNavLinks }: Props) => {
    return (
        <nav id="menu">
            <Navbar
                collapseOnSelect
                fixed="top"
                expand="sm"
                bg="dark"
                variant="dark"
            >
                <div className="container">
                    <div className="col-sm-4 col-md-3">
                        <Navbar.Brand
                            href={listNavLinks[0].navLink.href}
                        >
                            <img src={urlLogo} height="70px" />
                        </Navbar.Brand>
                    </div>
                    <div className="col-sm-8 col-md-9">
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                {listNavLinks.map((n, index) => {
                                    if (n.navLink.items) {
                                        return (
                                            <NavDropdown
                                                key={index}
                                                className="text-uppercase font-weight-bold menu-link mx-2 bg-dark p-0"
                                                title={n.navLink.label}
                                                id={n.navLink.label}
                                            >
                                                {n.navLink.items.map(
                                                    (i, idx) => {
                                                        return (
                                                            <NavDropdown.Item
                                                                href={
                                                                    i.navLink
                                                                        .href
                                                                }
                                                                key={idx}
                                                                className="text-capitalize"
                                                            >
                                                                {
                                                                    i.navLink
                                                                        .label
                                                                }
                                                            </NavDropdown.Item>
                                                        )
                                                    }
                                                )}
                                            </NavDropdown>
                                        )
                                    } else {
                                        return (
                                            <Nav.Link
                                                key={index}
                                                href={n.navLink.href}
                                                className="text-uppercase font-weight-bold menu-link mx-2"
                                            >
                                                {n.navLink.label}
                                            </Nav.Link>
                                        )
                                    }
                                })}
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>
                </div>
            </Navbar>
        </nav>
    )
}

export default Menu
