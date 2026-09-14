import type { ButtonProps } from "../../utils/types"

export default function Button({info}: ButtonProps){
    let height = info.height || "h-fit "
    let width = info.width || "w-fit "

    return (
        <div 
        className={width + height + 
            " flex border rounded p-2 bg-[var(--pani-clear)] color-[var(--pani-dark)] cursor-pointer items-center"
        }
        onClick={() => info.buttonFn?.()}
        >
            {info.buttonName}
        </div>
    )
}