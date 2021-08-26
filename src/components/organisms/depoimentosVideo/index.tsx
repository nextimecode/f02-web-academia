import React from 'react'
import { VideoProps } from '../../../types/types'
import Title from '../../atoms/title'
import FilmBox from '../../molecules/filmBox'

type Props = {
    videos: Record<string, VideoProps>[]
}

const DepoimentosVideo = ({ videos }: Props) => {
    return (
        <section>
            <div className="container mb-5">
                <Title label="Depoimentos" />

                <div className="row">
                    {videos.map((v, index) => (
                        <div
                            key={index}
                            className="col-sm-12 col-md-6 col-lg-3 p-1"
                        >
                            <FilmBox
                                src={v.video.src}
                                proportion='9x16'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DepoimentosVideo
