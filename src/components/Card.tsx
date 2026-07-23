import type { Carte } from "../utils/types"

export default function Card({cardInfo}: {cardInfo: Carte}) {

    return (

        <div>
            UNE CARTE
            {cardInfo.description}
        </div>

    )
}