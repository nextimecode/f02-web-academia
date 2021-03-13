import { Container } from 'next/app'
import React from 'react'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'
import Slider from '../../organisms/slider'

type Props = {
    carouselPhotos: Record<string, any>
}

const Resultados = ({carouselPhotos}: Props) => {

    return (
        <section>
<<<<<<< HEAD
            <Container>
                <Title label='Resultados reais'/>
                <Subhead label='#HASHTAGPERSONAL'/>
                    
                <Slider photos={carouselPhotos}/>
=======
            <Container className="px-2 my-2">
                <Title label="Resultados reais" />
                <Subhead label="#TeamSaoMiguelito" />
                <div className="row px-2 " style={{ backgroundColor: 'red' }}>
                    AQUI ESTÁ O SLIDER DE FOTOS
                </div>
>>>>>>> 64bf866ecd225ece81d4943e9e1c58794f7c3383
            </Container>
        </section>
    )
}

export default Resultados
