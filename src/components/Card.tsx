import { useState } from "react"
import Button from "./util_components/Button"
import Modal from "./util_components/Modal";

export default function Card({ cardInfo }) { // TYPER LA PROPS AVEC Carte / CarteProps
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardIdToDelete, setCardIdToDelete] = useState(null)

    function openDeleteModal(cardId: string) {
        setIsModalOpen(true)
        setCardIdToDelete(cardId)
    }

    function closeDeleteModal() {
        setIsModalOpen(false)
    }
    
    return (
        <div className="flex flex-col border rounded-xl h-45 w-50 justify-between p-2 items-center">
            <Button info={{buttonName: " - ", height:"h-6", buttonFn: () => openDeleteModal(cardInfo.serial)}}/>
            
            <span>Collection {cardInfo.collection}</span>
            <span>Equipe {cardInfo.team}</span>
            <span>Numéro {cardInfo.serial}</span>
            <span className="font-bold">{cardInfo.description}</span>

            {isModalOpen && <Modal info={{
                title: "Supprimer la carte", 
                content: "Êtes vous sûr.e de vouloir supprimer ce double de votre collection ?", 
                onClose: closeDeleteModal
                }}/>}
        </div>
    )
}