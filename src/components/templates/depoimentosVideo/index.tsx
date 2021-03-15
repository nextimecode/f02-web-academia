import React from 'react'
import Film from '../../atoms/film'
import Title from '../../atoms/title'

type Props = {
    videos: Record<string, any>
}

const DepoimentosVideo = ({ videos }: Props) => {

    return (
        <section>
            <div className="container mb-5">
                <Title label='Depoimentos'/>

                <div className="row">
                    
                    {videos.map((v, index) =>
                        <div className="col-sm-12 col-md-6 col-lg-3 p-1">
                            <div className="ratio ratio-9x16">
                                <Film
                                    key={index}
                                    src={v.video.src}
                                />
                            </div>
                        </div>
                    )}

                </div>
                
            </div>
        </section>
    )
}

export default DepoimentosVideo
