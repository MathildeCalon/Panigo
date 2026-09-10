export default function Logo({ name }: {name: string} ){
    return (
        <span className="flex">
            <img src={"/" + name} alt={name} className="h-5 w-5"/>
        </span>
    )
}