import { useState } from "react";
import type { Carte } from "../utils/types"
import Card from "./Card"
import Button from "./util_components/Button"
import Modal from "./util_components/Modal";

interface CardsProp {
    info: Carte[]
}

export default function Cards({ info }: CardsProp) {

    const [isAddNewCardModalOpen, setIsAddNewCardModalOpen] = useState(false);

    function closeAddNewCardModal() {
        setIsAddNewCardModalOpen(false)
    }

    return (
        <div id="doubles">
            <h2 className="pl-20 font-bold text-xl mt-10">Mes doubles</h2>
            <div className="flex justify-end pr-10 pt-5">
                <Button info={{ buttonName: " + Ajouter une carte", buttonFn: () => setIsAddNewCardModalOpen(true) }} />
            </div>
            <div className='flex justify-center gap-5 pl-10 pr-10 pt-5 flex-wrap'>
                {info.map((card: Carte) => {
                    return (
                        <Card cardInfo={card} />
                    )
                })}

                {info.length === 0 && (
                    <span>Pas de doubles</span>
                ) }
            </div>

            {isAddNewCardModalOpen && <Modal info={{
                title: "Ajouter un double",
                content: "Faire le form",
                onClose: closeAddNewCardModal
            }} />}


        </div>
    )

}