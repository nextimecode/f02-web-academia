import React from 'react'
import { Container } from 'react-bootstrap'
import { TextoProps } from '../../../types/types'
import Title from '../../atoms/title'
import Video from '../../atoms/video'

type Props = {
    txtBemVindo: Record<string, TextoProps>[]
}

const BemVindo = ({ txtBemVindo }: Props) => {
    return (
        <section>
            <Container className="px-2 my-2">
                <Title label="Seja bem-vindo!" />
                <div className="row px-2 my-2">
                    <div className="col-md-12 col-lg-5 m-auto">
                        {txtBemVindo.map((txt, index) => (
                            <p key={index} className={txt.paragrafo.classes}>
                                {txt.paragrafo.texto}
                            </p>
                        ))}
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                        <Video src="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BemVindo
