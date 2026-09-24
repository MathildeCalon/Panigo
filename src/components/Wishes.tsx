import { useState, type JSX } from "react";
import type { CardInfo, Carte } from "../utils/types";
import Button from "./util_components/Button";
import Card from "./Card";
import Modal from "./util_components/Modal";

interface InfoProps {
    info: Carte[]
}

export default function Wishes({ info }: InfoProps) {
    const [wishesCard, setWishesCard] = useState<Carte[]>(info)
    const [isAddNewWishModalOpen, setIsAddNewWishModalOpen] = useState(false);

    function closeAddNewWishModal() {
        setIsAddNewWishModalOpen(false)
    }

    function deleteCard(cardId: number) {
        console.log(cardId)
        const newCards = wishesCard.filter((card) => card.serial !== cardId)
        setWishesCard(newCards)

        return true
    }
    console.log
    return (
        <div id="wishes">
            <h2 className="pl-20 font-bold text-xl mt-10">Mes souhaits</h2>
            <div className="flex justify-end pr-10 pt-5">
                <Button info={{ buttonName: " + Ajouter une carte", buttonFn: () => setIsAddNewWishModalOpen(true) }} />
            </div>

            <div className='flex justify-center gap-5 pl-10 pr-10 pt-5 flex-wrap'>
                {wishesCard.map((card: Carte) => {
                    const currentCard: CardInfo = { card: card, deleteFn: () => deleteCard(card.serial), double: false }
                    return (
                        <Card key={card.serial} cardInfo={currentCard} />
                    )
                })}

                {wishesCard.length === 0 && (
                    <span>Pas de souhaits enregistrés</span>
                )}
            </div>

            {isAddNewWishModalOpen && <Modal info={{
                title: "Ajouter un souhait",
                validateName: "Ajouter",
                content: <>Faire le form</>,
                onClose: closeAddNewWishModal
            }} />}
        </div>


    )
}