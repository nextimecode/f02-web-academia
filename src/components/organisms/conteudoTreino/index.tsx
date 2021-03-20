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

const ConteudoTreino = ({
    sectionConteudoTitle,
    sectionConteudoSubtitle,
    cardsAcessos
}: Props) => {
    const numberColumns = cardsAcessos.length % 2 === 0 ? '6' : '4'

    return (
        <section>
            <div className="container">
                <Subhead label={sectionConteudoSubtitle} />
                <Title label={sectionConteudoTitle} />
                <div className="row">
                    {cardsAcessos.map((c, index) => (
                        <div key={index} className={`col-md-${numberColumns}`}>
                            <CardAcessos
                                cardImage={c.card.image}
                                cardLabel={c.card.label}
                                cardText={c.card.text}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ConteudoTreino
