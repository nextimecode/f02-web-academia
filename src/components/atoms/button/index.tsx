import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { IconName } from '@fortawesome/fontawesome-common-types'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './styles.scss'
import Link from 'next/link'

library.add(fab)

type Props = {
    label: string
    prefixIcon?: IconName
    suffixIcon?: IconName
    href?: string
    target?: string
    className?: string
    style?: React.CSSProperties
}

const Button = React.forwardRef<HTMLAnchorElement, Props>(
    (
        {
            label,
            prefixIcon,
            suffixIcon,
            href,
            className = 'btn btn-buy rounded',
            style,
            target = ''
        }: Props,
        ref
    ) => {
        return (
            <Link href={href}>
                <a
                    className={className}
                    style={style}
                    target={target}
                    ref={ref}
                >
                    {prefixIcon && (
                        <FontAwesomeIcon
                            icon={['fab', prefixIcon]}
                            className="me-1"
                        />
                    )}
                    {label}
                    {suffixIcon && (
                        <FontAwesomeIcon
                            icon={['fab', prefixIcon]}
                            className="ms-1"
                        />
                    )}
                </a>
            </Link>
        )
    }
)

Button.displayName = 'Button'

export default Button
