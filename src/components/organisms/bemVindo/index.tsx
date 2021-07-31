import React from 'react'
import { Container } from 'react-bootstrap'
import { TextoProps } from '../../../types/types'
import Film from '../../atoms/film'
import Title from '../../atoms/title'

type Props = {
    txtBemVindo: Record<string, TextoProps>[]
    videoMain: string
}

const BemVindo = ({ txtBemVindo, videoMain }: Props) => {
    return (
        <section>
            <Container className="px-2 my-2">
                <Title label="Seja bem-vindo!" />
                <div className="row px-2 my-2">
                    <div className="col-sm-12 col-md-6 m-auto">
                        {txtBemVindo.map((txt, index) => (
                            <p key={index} className={txt.paragrafo.classes}>
                                {txt.paragrafo.texto}
                            </p>
                        ))}
                    </div>
                    <div className="col-sm-12 col-md-6 text-center">
                        <div className="ratio ratio-9x16 mh-80 my-1">
                            <Film src={videoMain} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BemVindo
