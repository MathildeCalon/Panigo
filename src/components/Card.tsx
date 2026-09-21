import { useState } from "react"
import Button from "./util_components/Button"
import Modal from "./util_components/Modal";
import type { Carte } from "../utils/types";

interface CarteProps {
    cardInfo: Carte
}

export default function Card({ cardInfo }: CarteProps) {
    const [card, setCard] = useState<Carte>(cardInfo)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function openDeleteModal() {
        if (card.count > 1) {
            setCard({
                ...card,
                count: card.count - 1
            })
        } else {
            setIsDeleteModalOpen(true)
        }
    }

    function addCardToCount() {
        setCard({
            ...card,
            count: card.count + 1
        })
    }

    function closeDeleteModal() {
        setIsDeleteModalOpen(false)
    }


    return (
        <div className="flex flex-col border border-[var(--pani-clear)] rounded-xl h-45 w-50 justify-between p-2 items-center bg-[var(--pani-dark)] text-[var(--pani-bg)]">
            <div className="flex gap-2 items-center">
                <Button info={{ buttonName: " - ", height: "h-3", width: "w-3", buttonFn: () => openDeleteModal() }} />
                <span className="font-bold">x {card.count}</span>
                <Button info={{ buttonName: " + ", height: "h-3", width: "w-3", buttonFn: () => addCardToCount() }} />
            </div>


            <span>Collection {card.collection}</span>
            <span>Equipe {card.team}</span>
            <span>Numéro {card.serial}</span>
            <span className="font-bold">{card.description}</span>

            {isDeleteModalOpen && <Modal info={{
                title: "Supprimer la carte",
                content: "Êtes vous sûr.e de vouloir supprimer ce double de votre collection ?",
                onClose: closeDeleteModal
            }} />}

        </div>
    )
}