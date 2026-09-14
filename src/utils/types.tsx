export type Carte = {
    collection: string,
    team: string,
    serial: number,
    description: string
}

export type Account = {
    id: number,
    firstname: string,
    lastname: string,
    lastConnected: Date,
    firstConnected: Date,
    team: string // Créer une interface équipe?
}

export type ModalInfo = {
    title: string,
    content: string,
    onValidate?: () => void
    onClose?: () => void
}

export type ButtonInfo = {
    buttonName: string,
    height?: string,
    width?: string,
    buttonFn?: () => void,
}

// Props
export type ModalProps = {
    info: ModalInfo
}

export type ButtonProps = {
    info: ButtonInfo
}