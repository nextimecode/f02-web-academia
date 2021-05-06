import { Container } from 'next/app'
import React from 'react'
import { Row } from 'react-bootstrap'
import Title from '../../title'

type Props = {
    heroImage?: string
    label1?: string
    label2?: string
}

const Hero = ({ heroImage, label1, label2 }: Props) => {
    return (
        <section
            style={{ backgroundImage: `url("${heroImage}")` }}
            className="vh-100 background-home"
            id="home"
        >
            <div
                className="vh-100"
                style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
            >
                <Container>
                    <Row>
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center">
                            <div
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                    borderRadius: '10px'
                                }}
                            >
                                <Title label={label1} />
                                <Title
                                    label={label2}
                                    className="text-primary"
                                />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Hero
