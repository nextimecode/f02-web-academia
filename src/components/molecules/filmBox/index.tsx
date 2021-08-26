import React from 'react'
import Film from '../../atoms/film'

type Props = {
    src: string
    proportion?: string
    classes?: string
}

const FilmBox = ({
    src,
    proportion = '',
    classes = ''
}: Props) => {

    const proportions = `ratio ratio-${proportion}`

    const ytUrl = 'https://www.youtube.com/'
    const fromYT = (src.includes(ytUrl))

    return (
        <div className={`${proportions} ${classes}`}>
            {fromYT &&
                <iframe
                    src={src}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>

                </iframe>
            }

            {!fromYT &&
                <Film src={src} />
            }
            
        </div>
    )
}

export default FilmBox
