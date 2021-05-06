import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import TreinoTemplate from '../components/templates/treinoTemplate'
import { carouselFotosResultados } from '../pages/index'

const Treino: React.FC = () => {
    return (
        <PageTemplate title="Treino">
            <TreinoTemplate
                heroImage="assets/img/cards/plano_masc.jpg"
                srcVideo="assets/video/treino.mov"
                sectionConteudoTitle="terá acesso"
                sectionConteudoSubtitle="Confira tudo que você"
                carouselPhotos={carouselFotosResultados}
                cardPlanoTitle="Plano masculino"
                cardPlanoPreco={{ value: '41,90' }}
                cardPlanoImage="/assets/img/cards/card_03.jpg"
                cardPlanoLinkPage="/#"
                cardPlanoButtonLabel="Alcance seus objetivos"
            />
        </PageTemplate>
    )
}

export default Treino
