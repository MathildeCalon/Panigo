import type { Carte } from "../utils/types"

export default function Card({ cardInfo }: { cardInfo: Carte }) {

    return (
        <div className="flex flex-col border rounded-xl h-45 w-50 justify-between p-2 items-center">
            <span>Collection {cardInfo.collection}</span>
            <span>Equipe {cardInfo.team}</span>
            <span>Numéro {cardInfo.serial}</span>
            <span className="font-bold">{cardInfo.description}</span>
        </div>
    )
}