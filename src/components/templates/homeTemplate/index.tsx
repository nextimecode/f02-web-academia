import React from 'react'
import Separator from '../../atoms/separator'
import BemVindo from '../../organisms/bemVindo'
import DepoimentosTexto from '../../organisms/depoimentosTexto'
import DepoimentosVideo from '../../organisms/depoimentosVideo'
import Home from '../../organisms/home'
import Planos from '../../organisms/planos'
import RedesSociais from '../../organisms/redesSociais'
import Resultados from '../../organisms/resultados'

type Props = {
    wallpaper: string
    carouselPhotos: Record<string, any>
    videos: Record<string, any>
    depoimentos: Record<string, any>
}

const HomeTemplate = ({
    wallpaper,
    carouselPhotos,
    videos,
    depoimentos
}: Props) => {
    return (
        <>
            <Home urlWallpaper={wallpaper} />
            <Separator />

            <BemVindo />
            <Separator />

            <Planos />
            <Separator />

            <Resultados carouselPhotos={carouselPhotos} />
            <DepoimentosVideo videos={videos} />
            <Separator />

            <RedesSociais />
            <Separator />

            <DepoimentosTexto depoimentos={depoimentos} />
        </>
    )
}

export default HomeTemplate
