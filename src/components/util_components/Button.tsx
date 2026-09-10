export default function Button({buttonName}:{buttonName: string}){
    return (
        <div 
        className="border rounded p-2 w-fit bg-[var(--pani-yellow)] color-[var(--pani-blue)] cursor-pointer"
        onClick={() => console.log(console.log("Card added"))} // TODO: Remplacer par la fonction 
        >
            {buttonName}
        </div>
    )
}