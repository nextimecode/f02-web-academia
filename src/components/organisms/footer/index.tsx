import React from 'react'
import { Container } from 'react-bootstrap'

import './style.scss'

const Footer = () => {
    return (
        <Container className="footer py-2" fluid={true}>
            <div className="row footer-container">
                <div className="col-6 text-center py-2 footer-item">
                    Copyright © {new Date().getFullYear()} | <br/>Vinícius Dias
                </div>
                <div className="col-6 text-center py-2 footer-item">
                    Developed by <br/>
                    <a className="link" href="https://nextime.com.br">
                        NeXTIME
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Footer
