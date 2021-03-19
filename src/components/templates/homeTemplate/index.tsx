import React from 'react'
import Separator from '../../atoms/separator'
import BemVindo from '../../organisms/bemVindo'
import DepoimentosTexto from '../../organisms/depoimentosTexto'
import DepoimentosVideo from '../../organisms/depoimentosVideo'
import Home from '../../organisms/home'
import Planos from '../../organisms/planos'
import RedesSociais from '../../organisms/redesSociais'
import Resultados from '../../organisms/resultados'

interface Props {
    wallpaper: string
    carouselPhotos: Record<string, Record<string, string>>[]
    videos: Record<string, Record<string, string>>[]
    depoimentos: Record<string, Record<string, string>>[]
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
