import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import ConsultoriaTemplate from '../components/templates/consultoriaTemplate'

const Consultoria: React.FC = () => {
    const heroImage = 'assets/img/consultoria.jpg'
    const videoConsultoria = 'assets/video/consultoria.MOV'

    return (
        <PageTemplate title="Consultoria">
            <ConsultoriaTemplate
                heroImage={heroImage}
                videoConsultoria={videoConsultoria}
            />
        </PageTemplate>
    )
}

export default Consultoria
