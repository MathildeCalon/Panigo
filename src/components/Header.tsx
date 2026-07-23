import { type Account } from "../utils/types"

export default function Header({ user }: { user: Account }) {

    return (
        <div className="flex justify-between">
            <div>
                <img src="/panigo_logo.png" alt="Logo Panigo" className="w-20 h-20" />
            </div>
            <div className="flex p-5">
                {user ? (
                    <nav>
                        <span className="mr-10">
                            Bienvenue <span className="font-bold">{user.firstname} {user.lastname}</span>
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