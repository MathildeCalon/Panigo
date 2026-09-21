export type Carte = {
    collection: string,
    team: string,
    serial: number,
    description: string,
    count: number,
}

export type Account = {
    id: number,
    firstname: string,
    lastname: string,
    lastConnected: Date,
    firstConnected: Date,
    team: string // Créer une interface équipe pour faire un tableau d'équipes?,
    email: string,
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

export type ExchangeInfo = {
    possibilities?: Exchange[],
    pastExchanges?: Exchange[]
}

export type Exchange = {
    id: number,
    outgoingCard: number,
    ingoingCard: number,
    date?: Date,
    otherAccount: Account
}