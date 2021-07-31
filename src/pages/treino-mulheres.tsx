import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import TreinoTemplate from '../components/templates/treinoTemplate'

import { HOTMART_COURSE_WOMEN } from '../pages/index'

const TreinoMulheres: React.FC = () => {
    return (
        <PageTemplate title="Treino">
            <TreinoTemplate
                heroImage="assets/img/cards/plano_fem.jpg"
                srcVideo="assets/video/treino.MOV"
                sectionConteudoTitle="terá acesso"
                sectionConteudoSubtitle="Confira tudo que você"
                cardPlanoTitle="Plano feminino"
                cardPlanoPreco={{ value: '41,90' }}
                cardPlanoImage="/assets/img/cards/card_01.jpg"
                cardPlanoButtonLabel="Alcance seus objetivos"
                cardPlanoLinkPage={HOTMART_COURSE_WOMEN}
            />
        </PageTemplate>
    )
}

export default TreinoMulheres
