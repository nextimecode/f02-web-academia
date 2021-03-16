import Link from 'next/link'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container className="footer py-4" fluid={true}>
            <div className="row d-flex">
                <div className="col m-auto text-center">Copyright © {new Date().getFullYear()} | Site da Academia</div>
                <div className="col m-auto text-center">Developed by <a className="link" href="https://nextime.com.br">NeXTIME</a></div>
            </div>
        </Container>
    )
}

export default Footer
