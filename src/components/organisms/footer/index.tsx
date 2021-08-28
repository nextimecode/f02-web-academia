import React from 'react'
import NextimeSvg from '../../atoms/nextimeSvg'

const Footer = () => {
    return (
        <div className="footer py-2">
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
        </div>
    )
}

export default Footer
