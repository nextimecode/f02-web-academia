import React from 'react'

type Props = {
    title: string
    children: React.ReactNode
}

const CardTreino = ({ title, children }: Props) => {
    return (
        <div className="col">
            <div className="card bg-dark h-100">
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
