import React from 'react'
import { Container } from 'react-bootstrap'
import NextimeSvg from '../../atoms/nextimeSvg'

const Footer = () => {
    return (
        <Container className="footer py-2" fluid={true}>
            <div className="row footer-container">
                <div className="col-md-12 col-lg-6 py-2 footer-item">
                    Copyright © {new Date().getFullYear()} | Vinícius Dias
                </div>
                <div className="col-md-12 col-lg-6 py-2 footer-item">
                    Desenvolvido por&nbsp;
                    <a href="https://nextime.com.br">
                        <NextimeSvg size={1.5} />
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Footer
