import type { Carte } from "../utils/types"
import Card from "./Card"
import Button from "./util_components/Button"

export default function Cards({ cards }) {

    return (
        <div className="">
            <h2 className="pl-20 font-bold text-xl mt-10">Mes doubles</h2>
            <div className="flex justify-end pr-10 pt-5">
                <Button info={{buttonName:" + Ajouter une carte"}} />
            </div>
            <div className='flex justify-center gap-5 pl-10 pr-10 pt-5 flex-wrap'>
                {cards.map((card: Carte) => {
                    return (
                        <Card cardInfo={card} />
                    )
                })}
            </div>
        </div>
    )

}