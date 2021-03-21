import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import Button from '../../atoms/button'

type Props = {
    urlWallpaper: string
}

const Home = ({ urlWallpaper = '' }: Props) => {
    return (
        <section
            style={{
                backgroundImage: `url("${urlWallpaper}")`,
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}
            className="vh-100"
        >
            <div
                className="vh-100"
                style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
            >
                <Container>
                    <Row>
                        <div className="position-absolute top-50 start-50 translate-middle text-center">
                            <Subtitle label="Não deixe para depois" />
                            <Title label="Alcance a sua melhor forma..." />

                            <div className="d-flex justify-content-center">
                                <Button label="Comece agora >>" href="/#" />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Home
