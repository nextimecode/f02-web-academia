import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import TreinoTemplate from '../components/templates/treinoTemplate'

import { HOTMART_COURSE_MEN } from '../pages/index'

const Treino: React.FC = () => {
    return (
        <PageTemplate title="Treino">
            <TreinoTemplate
                heroImage="assets/img/cards/plano_masc.jpg"
                srcVideo="assets/video/treino.MOV"
                sectionConteudoTitle="terá acesso"
                sectionConteudoSubtitle="Confira tudo que você"
                cardPlanoTitle="Plano masculino"
                cardPlanoPreco={{ value: '41,90' }}
                cardPlanoImage="/assets/img/cards/card_03.jpg"
                cardPlanoButtonLabel="Alcance seus objetivos"
                cardPlanoLinkPage={HOTMART_COURSE_MEN}
            />
        </PageTemplate>
    )
}

export default Treino
