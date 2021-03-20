import React from 'react'

type Props = {
    src: string
}

const Video = ({ src }: Props) => {
    return (
        <iframe
            loading="lazy"
            className="w-100 h-100 py-4"
            title="Player de Vídeo youtube"
            src={src}
            data-rocket-lazyload="fitvidscompatible"
            data-ll-status="loaded"
        />
    )
}

export default Video
