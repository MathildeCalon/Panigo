import { useEffect, useState, type JSX } from "react";
import type { CardInfo, Carte } from "../utils/types"
import Card from "./Card"
import Button from "./util_components/Button"
import Modal from "./util_components/Modal";

interface CardsProp {
    info: Carte[]
}

export default function Cards({ info }: CardsProp) {
    const [cards, setCards] = useState<Carte[]>(info)
    const [isAddNewCardModalOpen, setIsAddNewCardModalOpen] = useState(false);
    const [newCard, setNewCard] = useState<Carte>({
        collection: "",
        team: "",
        serial: 0,
        playerName: "",
        count: 0,
    })

    function closeAddNewCardModal() {
        setIsAddNewCardModalOpen(false)
    }

    function saveNewCard() {
        const newCards = [...cards]
        newCards.push(newCard)
        setCards(newCards)

        setIsAddNewCardModalOpen(false)
        return true
    }

    function deleteCard(cardId: number){
        const newCards = cards.filter((card) => card.serial !== cardId)
        setCards(newCards)

        return true
    }

    console.log(cards)

    useEffect(() => {

    }, [newCard, setNewCard])

    const addNewCardForm: JSX.Element =
        <div className="flex flex-col">
            <span>Collection :</span>
            <input
                type="text"
                id="collection"
                name="collection"
                required
                maxLength={25}
                minLength={4}
                onChange={(e) => setNewCard({ ...newCard, collection: e.target.value })}
            />
            <span>Equipe :</span>
            <input
                type="text"
                id="team"
                name="team"
                required
                maxLength={25}
                minLength={4}
                onChange={(e) => setNewCard({ ...newCard, team: e.target.value })}
            />
            <span>Numéro de carte :</span>
            <input
                type="number"
                id="serial"
                name="serial"
                required
                onChange={(e) => setNewCard({ ...newCard, serial: +e.target.value })}
            />
            <span>Nom du joueur :</span>
            <input
                type="text"
                id="playerName"
                name="playerName"
                required
                maxLength={50}
                minLength={4}
                onChange={(e) => setNewCard({ ...newCard, playerName: e.target.value })}
            />
            <span>Nombre de doubles :</span>
            <input
                type="number"
                id="count"
                name="count"
                required
                onChange={(e) => setNewCard({ ...newCard, count: +e.target.value })}
            />
        </div>

    return (
        <div id="doubles">
            <h2 className="pl-20 font-bold text-xl mt-10">Mes doubles</h2>
            <div className="flex justify-end pr-10 pt-5">
                <Button info={{ buttonName: " + Ajouter une carte", buttonFn: () => setIsAddNewCardModalOpen(true) }} />
            </div>
            <div className='flex justify-center gap-5 pl-10 pr-10 pt-5 flex-wrap'>
                {cards.map((card: Carte) => {
                    const currentCard: CardInfo = {card: card, deleteFn: () => deleteCard(card.serial), double: true}
                    return (
                        <Card key={card.serial} cardInfo={currentCard} />
                    )
                })}

                {info.length === 0 && (
                    <span>Pas de doubles</span>
                )}
            </div>

            {isAddNewCardModalOpen && <Modal info={{
                title: "Ajouter un double",
                validateName: "Ajouter",
                content: addNewCardForm,
                onClose: closeAddNewCardModal,
                onValidate: saveNewCard,
            }} />}


        </div>
    )

}