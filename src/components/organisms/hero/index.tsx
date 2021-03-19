import React from 'react'
import Title from '../../atoms/title'

type Props = {
    heroImage?: string
}

const Hero = ({ heroImage }: Props) => {
    return (
        <section
            className="vh-100"
            style={{
                backgroundImage: `url("${heroImage}")`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <div>
                    <Title label="Consultoria" />
                </div>
                <div>
                    <Title label="Personalizada" className="text-warning" />
                </div>
            </div>
        </section>
    )
}

export default Hero
