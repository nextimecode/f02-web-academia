import React from 'react'
import Title from '../../atoms/title'
import FilmBox from '../../molecules/filmBox'

type Props = {
    txtBemVindo: React.ReactElement
    videoMain: string
}

const BemVindo = ({ txtBemVindo, videoMain }: Props) => {
    return (
        <section>
            <div className="container px-2 my-2">
                <Title label="Seja bem-vindo!" className="scroll-emphasis" />
                <div className="row px-2 my-2">
                    <div className="col-sm-12 col-md-6 m-auto">
                        {txtBemVindo}
                    </div>
                    <div className="col-sm-12 col-md-6 text-center">
                        <FilmBox
                            src={videoMain}
                            proportion='9x16'
                            classes="mh-80 my-1 border-primary border-solid border-3 rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BemVindo
