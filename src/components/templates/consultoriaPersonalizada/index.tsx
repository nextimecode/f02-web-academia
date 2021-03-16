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
                    <h1>Consultoria</h1>
                </div>
                <div>
                    <h1 className="text-warning">Personalizada</h1>
                </div>
            </div>
        </section>
    )
}

export default ConsultoriaPersonalizada
