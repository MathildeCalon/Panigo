import type { ExchangeInfo } from "../utils/types"
import Exchange from "./Exchange"

interface ExchangeProps {
    data: ExchangeInfo
}
export default function Exchanges({data}: ExchangeProps){

    return (
        <div id="exchanges">
            <h2 className="pl-20 font-bold text-xl mt-10">Mes échanges</h2>
            <h3 className="pl-30 font-bold text-xl mt-5">Possibilités</h3>
            {!data.possibilities || data.possibilities.length === 0 && (
                <span>Pas d'échanges possibles pour le moment</span>
            )}

            <h3 className="pl-30 font-bold text-xl mt-5">Historique</h3>
            {!data.pastExchanges || data.pastExchanges.length === 0 && (
                <span>Pas encore d'échanges</span>
            )}

            {data.pastExchanges.map((exch) => {
                return (
                    <Exchange data={exch}/>
                )
            })}

        </div>
    )
}