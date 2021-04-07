import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import TreinoTemplate from '../components/templates/treinoTemplate'
import { carouselFotosResultados } from '../pages/index'

const TreinoMulheres: React.FC = () => {
    return (
        <PageTemplate title="Treino">
            <TreinoTemplate
                srcVideo="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1"
                buttonLabel="Alcance seus objetivos"
                buttonHref="#planos"
                sectionConteudoTitle="terá acesso"
                sectionConteudoSubtitle="Confira tudo que você"
                treinosFuncionamVideo1="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1"
                treinosFuncionamVideo2="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1"
                carouselPhotos={carouselFotosResultados}
                cardPlanoTitle="Plano feminino"
                cardPlanoPreco={{ value: 40 }}
                cardPlanoImage="/assets/img/cards/card_01.jpg"
                cardPlanoLinkPage="/#"
                cardPlanoButtonLabel="Adquira já"
            />
        </PageTemplate>
    )
}

export default TreinoMulheres
