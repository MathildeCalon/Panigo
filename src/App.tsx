import './App.css'
import Card from './components/Card'
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
    serial: 647,
    description: "Adèle Delval-Calon"
  }

  cards.push(firstCard)

  return (
    <>
      <Header user={userConnected}/>

      {cards.map((card) => {
        return (
          <Card cardInfo={card} />
        )
      })}

      <Footer />
    </>
  )
}

export default App
