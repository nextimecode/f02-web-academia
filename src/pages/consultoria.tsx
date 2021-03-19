import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import ConsultoriaTemplate from '../components/templates/consultoriaTemplate'

const Consultoria: React.FC = () => {
    return (
        <PageTemplate title="Consultoria">
            <ConsultoriaTemplate heroImage="assets/img/consultoria.jpg" />
        </PageTemplate>
    )
}

export default Consultoria
