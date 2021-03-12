type Props = {
    price: number
}

const Price = ({ price }: Props) => {
    return (
        <div className="my-4 d-flex text-warning">
            <div className="align-items-top">
                <span className="fs-6 lh-sm fw-lighter">R$</span>
            </div>

            <div className="align-items-baseline">
                <span className="display-5 lh-1">
                    <strong>{price}</strong>
                </span>
                <span className="fs-6 fw-lighter"> /mês</span>
            </div>
        </div>
    )
}

export default Price
