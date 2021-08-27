import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import ConsultoriaTemplate from '../components/templates/consultoriaTemplate'

import { VIDEO_INVITATION } from '../pages/index'

const Consultoria: React.FC = () => {
    const heroImage = 'assets/img/consultoria.jpg'

    return (
        <PageTemplate title="Consultoria">
            <ConsultoriaTemplate
                heroImage={heroImage}
                videoConsultoria={VIDEO_INVITATION}
            />
        </PageTemplate>
    )
}

export default Consultoria
