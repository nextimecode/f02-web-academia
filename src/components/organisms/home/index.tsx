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
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'length'
            }}
            className="w-100"
        >
            <Container>
                <Row>
                    <div
                        className=""
                        style={{
                            margin: '200px auto',
                            paddingTop: '100px'
                        }}
                    >
                        <Subtitle label="Não deixe para depois" />
                        <Title label="Alcance a sua melhor forma..." />

                        <div className="d-flex justify-content-center">
                            <Button label="Comece agora >>" href="/#" />
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Home
