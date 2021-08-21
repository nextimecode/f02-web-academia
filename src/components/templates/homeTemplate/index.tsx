import React from 'react'
import { DepoimentoProps, PhotoProps, VideoProps } from '../../../types/types'
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
    carouselPhotos: Record<string, PhotoProps>[]
    instagramPosts: Record<string, PhotoProps>[]
    videos: Record<string, VideoProps>[]
    depoimentos: Record<string, DepoimentoProps>[]
    txtBemVindo: React.ReactElement
    videoMain: string
}

const HomeTemplate = ({
    wallpaper,
    carouselPhotos,
    instagramPosts,
    videos,
    depoimentos,
    txtBemVindo,
    videoMain
}: Props) => {
    return (
        <>
            <Home urlWallpaper={wallpaper} />
            <Separator />

            <BemVindo txtBemVindo={txtBemVindo} videoMain={videoMain} />
            <Separator />

            <Planos />
            <Separator />

            <Resultados carouselPhotos={carouselPhotos} />
            <Separator />

            <DepoimentosVideo videos={videos} />
            <Separator />

            <RedesSociais instagramPosts={instagramPosts} />
            <Separator />

            <DepoimentosTexto depoimentos={depoimentos} />
        </>
    )
}

export default HomeTemplate
