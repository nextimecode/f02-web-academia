export interface VideoProps {
    src: string
    alt: string
}

export interface PhotoProps {
    src: string
    alt?: string
}

export interface DepoimentoProps {
    foto?: string
    nome: string
    profissao?: string
    texto: string
}

export interface NavLinkProps {
    href: string
    label: string
    items?: Record<string, NavItemsProps>[]
}

export interface CardAcessosProps {
    image: string
    label: string
    text: string
}

export interface PerguntasRespostas {
    question: string
    answer: string
}

export interface NavItemsProps {
    href: string
    label: string
}

export interface TextoProps {
    texto: string
    classes: string
}
