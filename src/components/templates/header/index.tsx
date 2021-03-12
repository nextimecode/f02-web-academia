import React from 'react'
import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'
import Menu from '../../organisms/menu'

type Props = {
    urlLogo: string
    width?: string
    height?: string
    listNavLinks: Record<string, unknown>
}

const Header = ({
    urlLogo,
    width = '60px',
    height = '60px',
    listNavLinks
}: Props) => {
    return (
        <Container
            className="fixed-top opacity-3"
            style={{ backgroundColor: '#000000' }}
            fluid={true}
        >
            <Row className="d-flex justify-content-center">
                <div className="col-3 m-auto text-center">
                    <Image
                        src={`/${urlLogo}`}
                        width={width}
                        height={height}
                        className="p-1"
                    />
                </div>
                <div className="col-9 m-auto text-center">
                    <Menu listNavLinks={listNavLinks} />
                </div>
            </Row>
        </Container>
    )
}

export default Header
