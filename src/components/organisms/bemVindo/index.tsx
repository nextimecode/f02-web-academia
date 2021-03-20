import React from 'react'
import { Container } from 'react-bootstrap'
import Title from '../../atoms/title'

const BemVindo = () => {
    return (
        <section>
            <Container className="px-2 my-2">
                <Title label="Seja bem-vindo!" />
                <div className="row px-2 my-2">
                    <div className="col-md-12 col-lg-5 m-auto">
                        <p>Conheça Vinícius Dias...</p>
                        <p>
                            Vinícius Dias é ex-atleta e ex-jogador de futebol.
                            Conhecido nas suas redes sociais como
                            @instrutordefitness, é formado em Educação Física há
                            6 anos e atua como personal trainer. Tornou-se
                            especialista em treinos para emagrecimento,
                            hipertrofia e hoje atua como referência nessas
                            áreas.
                        </p>
                        <p style={{ fontStyle: 'italic' }}>
                            Hoje, venho dividir meu método de treinamento para
                            você destravar seus resultados, conseguir emagrecer,
                            definir seu corpo e conquistar sua melhor versão em
                            qualquer lugar que esteja.
                        </p>
                        <p style={{ fontStyle: 'italic' }}>
                            Já são mais de 4 mil atendimentos personalizados que
                            transformaram a vida dos alunos. São mais de 6 mil
                            na plataforma de treinos online. Agora você não
                            estará mais sozinha!
                        </p>
                    </div>
                    <div className="col-md-12 col-lg-7 d-flex justify-content-center m-auto">
                        <div className="ratio ratio-4x3">
                            <iframe
                                loading="lazy"
                                className="w-100 py-4"
                                title="Player de Vídeo youtube"
                                src="https://www.youtube-nocookie.com/embed/xcJtL7QggTI?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1"
                                data-rocket-lazyload="fitvidscompatible"
                                data-ll-status="loaded"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BemVindo
