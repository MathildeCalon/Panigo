import type { ButtonInfo } from "../../utils/types"

interface ButtonProps {
    info: ButtonInfo
}

export default function Button({info}: ButtonProps){
    let height = info.height || "h-fit "
    let width = info.width || "w-fit "

    return (
        <div 
        className={width + " " + height + 
            " flex justify-center border rounded p-2 bg-[var(--pani-clear)] text-[var(--pani-dark)] cursor-pointer items-center"
        }
        onClick={() => info.buttonFn?.()}
        >
            {info.buttonName}
        </div>
    )
}