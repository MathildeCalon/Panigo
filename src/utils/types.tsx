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