import type { ModalInfo } from "../../utils/types";
import Button from "./Button";


interface ModalProps {
    info: ModalInfo
}


export default function Modal({ info }: ModalProps) {

    return (
        <div className="fixed top-[25%] left-[33%] min-h-50 min-w-100 bg-white border rounded 
        flex flex-col justify-between z-99999 p-5 text-[var(--pani-dark)]">
            <span className="top-0 text-xl flex justify-center pb-5">
                {info.title}
            </span>

            <div>
                {info.content}
            </div>

            <div className="flex justify-end gap-3 mt-10">
                <Button info={{ buttonName: "Annuler", buttonFn: info.onClose }} />
                <Button info={{ buttonName: info.validateName, buttonFn: info.onValidate }} />
            </div>
        </div>
    )
}