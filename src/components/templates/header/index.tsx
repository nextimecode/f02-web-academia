import React from 'react'
import Menu from '../../organisms/menu'

const Header = () => {
    const urlLogo = 'assets/img/logos/logo.png'

    const listNavLinks = [
        {
            navLink: {
                href: '/',
                label: 'Home'
            }
        },
        {
            navLink: {
                href: '#planos',
                label: 'Comece Agora'
            }
        },
        {
            navLink: {
                href: '/consultoria',
                label: 'Planos'
            }
        },
        {
            navLink: {
                href: '/area-do-aluno',
                label: 'Área de Alunos'
            }
        }
    ]

    return <Menu urlLogo={urlLogo} listNavLinks={listNavLinks} />
}

export default Header
