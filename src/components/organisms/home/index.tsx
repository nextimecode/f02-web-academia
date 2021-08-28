import React from 'react'
import { Row } from 'react-bootstrap'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import Button from '../../atoms/button'

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
                <div className="container">
                    <Row>
                        <div className="position-absolute bottom-0 start-50 translate-middle text-center">
                            <div
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                    borderRadius: '10px'
                                }}
                            >
                                <Subtitle label="Não deixe para depois" />
                                <Title label="Ganhe massa e perca peso fácil a jato" />
                            </div>

                            <div className="d-flex justify-content-center">
                                <Button
                                    label="Comece agora >>"
                                    href="#planos"
                                    className="btn rounded btn-buy btn-buy-course"
                                />
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default Home
