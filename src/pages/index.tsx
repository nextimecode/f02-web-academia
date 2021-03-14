import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Separator from '../components/atoms/separator'
import BemVindo from '../components/templates/bemVindo'
import Home from '../components/templates/home'
import Planos from '../components/templates/planos'
import Resultados from '../components/templates/resultados'
import DepoimentosVideo from '../components/templates/depoimentosVideo'
import RedesSociais from '../components/templates/redesSociais'
import DepoimentosTexto from '../components/templates/depoimentosTexto'
import PageTemplate from '../components/templates/pageTemplate'

const Index: React.FC = () => {
    const wallpaper = 'assets/img/personal.jpg'

    return (
        <PageTemplate>
            <Home urlWallpaper={wallpaper} />
            <Separator />

            <BemVindo />
            <Separator />

            <Planos />
            <Separator />

            <Resultados />
            <DepoimentosVideo />
            <Separator />

            <RedesSociais />
            <Separator />

            <DepoimentosTexto />
        </PageTemplate>
    )
}

export default Index
