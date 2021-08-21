import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import TreinoTemplate from '../components/templates/treinoTemplate'

import { HOTMART_COURSE_MEN } from '../pages/index'

const Treino: React.FC = () => {
    return (
        <PageTemplate title="Treino">
            <TreinoTemplate
                srcVideo="assets/video/treino.MOV"
                sectionConteudoTitle="terá acesso"
                sectionConteudoSubtitle="Confira tudo que você"
                cardPlanoPreco={{ value: '41,90' }}
                cardPlanoImage="/assets/img/cards/card_03.jpg"
                cardPlanoButtonLabel="Alcance seus objetivos"
                cardPlanoLinkPage={HOTMART_COURSE_MEN}
                gender="male"
            />
        </PageTemplate>
    )
}

export default Treino
