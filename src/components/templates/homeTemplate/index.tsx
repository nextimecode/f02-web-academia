import React from 'react'
import {
    DepoimentoProps,
    PhotoProps,
    TextoProps,
    VideoProps
} from '../../../types/types'
import Separator from '../../atoms/separator'
import BemVindo from '../../atoms/organisms/bemVindo'
import DepoimentosTexto from '../../atoms/organisms/depoimentosTexto'
import DepoimentosVideo from '../../atoms/organisms/depoimentosVideo'
import Home from '../../atoms/organisms/home'
import Planos from '../../atoms/organisms/planos'
import RedesSociais from '../../atoms/organisms/redesSociais'
import Resultados from '../../atoms/organisms/resultados'

interface Props {
    wallpaper: string
    carouselPhotos: Record<string, PhotoProps>[]
    instagramPosts: Record<string, PhotoProps>[]
    videos: Record<string, VideoProps>[]
    depoimentos: Record<string, DepoimentoProps>[]
    txtBemVindo: Record<string, TextoProps>[]
}

const HomeTemplate = ({
    wallpaper,
    carouselPhotos,
    instagramPosts,
    videos,
    depoimentos,
    txtBemVindo
}: Props) => {
    return (
        <>
            <Home urlWallpaper={wallpaper} />
            <Separator />

            <BemVindo txtBemVindo={txtBemVindo} />
            <Separator />

            <Planos />
            <Separator />

            <Resultados carouselPhotos={carouselPhotos} />
            <DepoimentosVideo videos={videos} />
            <Separator />

            <RedesSociais instagramPosts={instagramPosts} />
            <Separator />

            <DepoimentosTexto depoimentos={depoimentos} />
        </>
    )
}

export default HomeTemplate
