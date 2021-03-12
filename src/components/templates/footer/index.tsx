import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container className="fixed-bottom" fluid={true}>
            <Row className="d-flex justify-content-center">
                AQUI ESTÁ O RODAPÉ
            </Row>
        </Container>
    )
}

export default Footer
