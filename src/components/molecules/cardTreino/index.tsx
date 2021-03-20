import React from 'react'

type Props = {
    title: string
    children: React.ReactNode
    image: string
}

const CardTreino = ({ title, children, image }: Props) => {
    return (
        <div className="col">
            <div className="card bg-dark h-100">
                <img src={image} className="card-img-top"></img>
                <div className="card-body">
                    <div className="card-title">
                        <h3 className="text-start">{title}</h3>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CardTreino
