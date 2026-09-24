import { useState, type JSX } from "react"
import Button from "./util_components/Button"
import Modal from "./util_components/Modal";
import type { CardInfo, Carte } from "../utils/types";

interface CarteProps {
    cardInfo: CardInfo
}

export default function Card({ cardInfo }: CarteProps) {
    const [card, setCard] = useState<Carte>(cardInfo.card)
    const [isDeleteDoubleModalOpen, setIsDeleteDoubleModalOpen] = useState(false);
    const [isDeleteWishModalOpen, setIsDeleteWishModalOpen] = useState(false)

    // Doubles
    const deleteDoubleModalContent: JSX.Element =
        <div className="flex flex-col items-center">
            <span className="mb-2">Êtes vous sûr.e de vouloir supprimer ce double de votre collection ?</span>
            <span className="font-bold">Numéro {card.serial} - {card.playerName} - Equipe {card.team}</span>
        </div>

    function openDeleteDoubleModal() {
        if (card.count > 1) {
            setCard({
                ...card,
                count: card.count - 1
            })
        } else {
            setIsDeleteDoubleModalOpen(true)
        }
    }

    function addCardToCount() {
        setCard({
            ...card,
            count: card.count + 1
        })
    }

    function deleteDoubleCardBtn() {
        cardInfo.deleteFn()
        setIsDeleteDoubleModalOpen(false)
        return true
    }

    function closeDeleteDoubleModal() {
        setIsDeleteDoubleModalOpen(false)
    }

    // Souhaits
    const deleteWishCardModalContent: JSX.Element =
        <div className="flex flex-col items-center">
            <span>Êtes-vous sûr.e de vouloir supprimer cette carte de vos souhaits ?</span>
            <span className="font-bold"><span className="font-bold">Numéro {card.serial} - {card.playerName} - Equipe {card.team}</span></span>
        </div>

    function closeDeleteWishModal() {
        setIsDeleteWishModalOpen(false)
    }

    function deleteWishCardBtn() {
        cardInfo.deleteFn()
        setIsDeleteWishModalOpen(false)
        return true
    }



    return (
        <div className="flex flex-col border border-[var(--pani-clear)] rounded-xl h-45 w-50 justify-between p-2 items-center bg-[var(--pani-dark)] text-[var(--pani-bg)]">
            {cardInfo.double && (
                <div className="flex gap-2 items-center">
                    <Button info={{ buttonName: " - ", height: "h-3", width: "w-3", buttonFn: () => openDeleteDoubleModal() }} />
                    <span className="font-bold">x {card.count}</span>
                    <Button info={{ buttonName: " + ", height: "h-3", width: "w-3", buttonFn: () => addCardToCount() }} />
                </div>
            )}

            {!cardInfo.double && (
                <div className="flex gap-2 items-end">
                    <Button info={{ buttonName: " Supprimer ", height: "h-3", width: "w-3", buttonFn: () => setIsDeleteWishModalOpen(true) }} />
                </div>
            )}

            <span>Collection {card.collection}</span>
            <span>Equipe {card.team}</span>
            <span>Numéro {card.serial}</span>
            <span className="font-bold">{card.playerName}</span>

            {isDeleteDoubleModalOpen && cardInfo.double && <Modal info={{
                title: "Supprimer le double",
                validateName: "Supprimer",
                content: deleteDoubleModalContent,
                onClose: closeDeleteDoubleModal,
                onValidate: deleteDoubleCardBtn,
            }} />}

            {isDeleteWishModalOpen && !cardInfo.double && <Modal info={{
                title: "Supprimer le souhait",
                validateName: "Supprimer",
                content: deleteWishCardModalContent,
                onClose: closeDeleteWishModal,
                onValidate: deleteWishCardBtn,
            }} />}

        </div>
    )
}