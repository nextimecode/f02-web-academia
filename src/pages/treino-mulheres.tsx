import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import TreinoTemplate from '../components/templates/treinoTemplate'

import { HOTMART_COURSE_WOMEN, VIDEO_INVITATION } from '../pages/index'

const TreinoMulheres: React.FC = () => {
    return (
        <PageTemplate title="Treino">
            <TreinoTemplate
                srcVideo={VIDEO_INVITATION}
                sectionConteudoTitle="terá acesso"
                sectionConteudoSubtitle="Confira tudo que você"
                cardPlanoPreco={{ value: '41,90' }}
                cardPlanoImage="/assets/img/cards/card_01.jpg"
                cardPlanoButtonLabel="Alcance seus objetivos"
                cardPlanoLinkPage={HOTMART_COURSE_WOMEN}
                gender="female"
            />
        </PageTemplate>
    )
}

export default TreinoMulheres
