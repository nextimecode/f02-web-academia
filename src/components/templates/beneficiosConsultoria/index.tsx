import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle, faComments } from '@fortawesome/free-regular-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const BeneficiosConsultoria = () => {
    return (
        <section className="py-5 bg-dark">
            <div className="container align-bottom">
                <div className="row text-center">
                    <div className="col-md-3">
                        <FontAwesomeIcon
                            icon={faPlayCircle}
                            size="3x"
                            color="#ffc401"
                        />
                        <p>Vídeos para auxiliar a execução dos exercícios. </p>
                    </div>
                    <div className="col-md-3">
                        <FontAwesomeIcon
                            icon={faDumbbell}
                            size="3x"
                            color="#ffc401"
                        />
                        <p>Plano de treino criado somente para você.</p>
                    </div>
                    <div className="col-md-3">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            size="3x"
                            color="#ffc401"
                        />
                        <p>
                            Acesso exclusivo ao Instagram restrito da
                            consultoria.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <FontAwesomeIcon
                            icon={faComments}
                            size="3x"
                            color="#ffc401"
                        />
                        <p>Atendimento personalizado.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BeneficiosConsultoria
