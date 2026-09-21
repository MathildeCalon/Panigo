import { type Account } from "../utils/types"
import Logo from "./util_components/Logo"

export default function Header({ user }: { user: Account }) {

    return (
        <div className="flex p-2 fixed w-full items-center h-[15%] justify-between bg-[var(--pani-clear)]">
            <div className="pl-2">
                <img src="/panigo_logo.png" alt="Logo Panigo" className="w-20 h-20 rounded-full" />
            </div>
            <div className="flex p-5">
                {user ? (
                    <nav>
                        <span className="mr-10 cursor-pointer">
                            Bienvenue <span className="font-bold">{user.firstname} {user.lastname}</span>
                        </span>
                        <span className="mr-10 cursor-pointer">
                            {/* <Logo name="card.png" /> */}
                            <a href="#doubles">Mes doubles</a>
                        </span>
                        <span className="mr-10 cursor-pointer">
                            <a href="#wishes">
                                Mes souhaits
                            </a>
                        </span>

                        <span className="mr-10 cursor-pointer">
                            <a href="#exchanges">
                                Mes échanges
                            </a>
                        </span>
                        <button onClick={() => console.log("Disconnected")}>
                            Se déconnecter
                        </button>
                    </nav>
                ) : (
                    <span>Se connecter/Mon compte</span>
                )}
            </div>
        </div>
    )
}