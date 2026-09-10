import './App.css'
import Card from './components/Card'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import type { Carte, Account } from './utils/types'


function App() {
  // Page
  const cards = []
  const userConnected: Account | null =
  // null
  {
    id: 1,
    firstname: "Mathilde",
    lastname: "Calon",
    lastConnected: new Date(),
    firstConnected: new Date(),
    team: "U7"
  };

  // Appel API 
  // Vérification du user connecté
  // Chargement de ses cartes doublons
  // Chargement de ses cartes recherchées

  const firstCard: Carte = {
    collection: "AG Thumeries",
    team: "U7",
    serial: 647,
    description: "Adèle Delval-Calon"
  }

  const secondCard: Carte = {
    collection: "AG Thumeries",
    team: "U7",
    serial: 648,
    description: "Emma Danni"
  }

  const thirdCard: Carte = {
    collection: "AG Thumeries",
    team: "U7",
    serial: 684,
    description: "Adèle Charlet"
  }

  const fourthCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 534,
    description: "Romy Lefevre"
  }

  const fifthCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 157,
    description: "Marion Wozniak"
  }

  const sixthCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 984,
    description: "Elise Truc"
  }
  const seventhCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 657,
    description: "Alice Pluta"
  }
  const eighthCard: Carte = {
    collection: "AG Thumeries",
    team: "U9",
    serial: 637,
    description: "Gabriel Machin"
  }

  cards.push(firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard, seventhCard, eighthCard)

  return (
    <>
      <Header user={userConnected} />

      <Cards cards={cards} />

      <Footer />
    </>
  )
}

export default App
