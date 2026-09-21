import './App.css'
import Cards from './components/Cards'
import Exchanges from './components/Exchanges'
import Header from './components/Header'
import Wishes from './components/Wishes'
import type { Carte, Account, ExchangeInfo, Exchange } from './utils/types'


function App() {
  // Page
  const cards: Carte[] = []
  const wishes = []
  const exchanges: ExchangeInfo = {
    possibilities: [],
    pastExchanges: []
  };

  const userConnected: Account | null =
  // null
  {
    id: 1,
    firstname: "Mathilde",
    lastname: "Calon",
    email: "mathilde.calon@gmail.com",
    lastConnected: new Date(),
    firstConnected: new Date(),
    team: "U7"
  };

  const otherAccount: Account | null = {
    id: 2,
    firstname: "Emylie",
    lastname: "Wozniak",
    email: "emy@gmail.com",
    lastConnected: new Date(),
    firstConnected: new Date(),
    team: "U9"
  }

  const pastExchange: Exchange = {
    id: 666,
    outgoingCard: 463,
    ingoingCard: 8778,
    date: new Date(),
    otherAccount: otherAccount
  }

  exchanges.pastExchanges.push(pastExchange)

  // Appel API 
  // Vérification du user connecté
  // Chargement de ses cartes doublons
  // Chargement de ses cartes recherchées

  const firstCard: Carte = {
    collection: "AG Thumeries",
    team: "U7",
    serial: 647,
    description: "Adèle Delval-Calon",
    count: 1
  }

  const secondCard: Carte = {
    collection: "AG Thumeries",
    team: "U7",
    serial: 648,
    description: "Emma Danni",
    count: 1,
  }

  const thirdCard: Carte = {
    collection: "AG Thumeries",
    team: "U7",
    serial: 684,
    description: "Adèle Charlet",
    count: 2
  }

  const fourthCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 534,
    description: "Romy Lefevre",
    count: 1
  }

  const fifthCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 157,
    description: "Marion Wozniak",
    count: 2
  }

  const sixthCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 984,
    description: "Elise Truc",
    count: 1
  }
  const seventhCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 657,
    description: "Alice Pluta",
    count: 1
  }
  const eighthCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 637,
    description: "Gabriel Machin",
    count: 1
  }

    const card1: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 637,
    description: "Gabriel Machin",
    count: 1
  }

    const card2: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 637,
    description: "Gabriel Machin",
    count: 1
  }

    const card3: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 637,
    description: "Gabriel Machin",
    count: 1
  }

    const card4: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 637,
    description: "Gabriel Machin",
    count: 1
  }

  cards.push(firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard, seventhCard, eighthCard, card1, card2, card3, card4, card4)

  return (
    <>
      <Header user={userConnected} />

      <main className='flex flex-col overflow-y-auto bottom-5 fixed top-30'>
        <Cards info={cards} />
        <Wishes info={wishes}/>
        <Exchanges data={exchanges}/>
      </main>
    </>
  )
}

export default App
