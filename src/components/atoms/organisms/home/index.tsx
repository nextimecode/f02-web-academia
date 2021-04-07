import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Subtitle from '../../subtitle'
import Title from '../../title'
import Button from '../../button'

import './style.scss'

type Props = {
    urlWallpaper: string
}

const Home = ({ urlWallpaper = '' }: Props) => {
    return (
        <section
            style={{ backgroundImage: `url("${urlWallpaper}")` }}
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
                                <Subtitle label="Não deixe para depois" />
                                <Title label="Conquiste seu resultado neste ano" />
                            </div>

                            <div className="d-flex justify-content-center">
                                <Button
                                    label="Comece agora >>"
                                    href="#planos"
                                />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Home
