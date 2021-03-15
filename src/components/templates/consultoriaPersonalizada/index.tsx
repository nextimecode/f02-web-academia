import React from 'react'

const ConsultoriaPersonalizada = () => {
    return (
        <section
            className="vh-100"
            style={{
                backgroundImage: 'url("assets/img/consultoria.jpg")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <div>
                    <span
                        className="display-3"
                        style={{ fontFamily: "'Racing Sans One', cursive;" }}
                    >
                        Consultoria
                    </span>
                </div>
                <div>
                    <span
                        className="display-1 text-warning"
                        style={{ fontFamily: "'Racing Sans One', cursive;" }}
                    >
                        Personalizada
                    </span>
                </div>
            </div>
        </section>
    )
}

export default ConsultoriaPersonalizada
