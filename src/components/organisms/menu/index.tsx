import Image from 'next/image'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
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
                <div className="row w-100">
                    <div className="col-4 d-flex justify-content-center p-1">
                        <div>
                            <Image
                                src={`/${urlLogo}`}
                                width="60px"
                                height="60px"
                            />
                        </div>
                    </div>
                    <div className="col-8 d-flex justify-content-end px-1">
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                {listNavLinks.map((n, index) => (
                                    <Nav.Link
                                        key={index}
                                        href={n.navLink.href}
                                        className="text-uppercase font-weight-bold menu-link mx-2"
                                    >
                                        {n.navLink.label}
                                    </Nav.Link>
                                ))}
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
