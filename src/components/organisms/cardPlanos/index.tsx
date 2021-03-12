import { Card, Button } from 'react-bootstrap'
import Price from '../../atoms/price'

type Props = {
    children: React.ReactNode
    price?: number
    recommended?: boolean
    accentColor: string
    title: string
    image: string
}

const CardPlanos = ({ children, price, title, recommended, image }: Props) => {
    return (
        <div className="col">
            <div
                className={`card rounded bg-dark overflow-hidden h-100 ${
                    recommended && 'border border-warning'
                }
                ' `}
            >
                <img src={image} className="card-img-top"></img>
                <div className="card-body">
                    <div className="fs-3 fw-normal card-title">{title}</div>
                    {price && <Price price={price} />}
                    <hr />
                    {children}
                </div>
                <div
                    className={
                        'card-footer d-flex align-items-center justify-content-center'
                    }
                >
                    <button
                        className={`btn rounded-pill px-3 my-2 ${
                            recommended
                                ? 'btn-warning'
                                : 'border-1 border-warning text-warning'
                        }`}
                    >
                        Saiba mais
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardPlanos
