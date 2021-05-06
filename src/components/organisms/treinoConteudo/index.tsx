import React from 'react'
import { CardAcessosProps } from '../../../types/types'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'
import CardAcessos from '../../molecules/cardAcessos'

type Props = {
    sectionConteudoTitle: string
    sectionConteudoSubtitle: string
    cardsAcessos: Record<string, CardAcessosProps>[]
}

const TreinoConteudo = ({
    sectionConteudoTitle,
    sectionConteudoSubtitle,
    cardsAcessos
}: Props) => {
    return (
        <section className="py-5">
            <div className="container">
                <Subhead label={sectionConteudoSubtitle} />
                <Title label={sectionConteudoTitle} />
                <div className="row">
                    {cardsAcessos.map((c, index) => (
                        <div
                            key={index}
                            className="col-xs-12 col-sm-6 col-lg-4"
                        >
                            <CardAcessos
                                cardImage={c.card.image}
                                cardLabel={c.card.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TreinoConteudo
