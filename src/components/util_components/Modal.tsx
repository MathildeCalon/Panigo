import type { ModalProps } from "../../utils/types";
import Button from "./Button";

export default function Modal({ info }: ModalProps) {

    return (
        <div className="fixed top-[33%] left-[33%] min-h-50 min-w-100 bg-white border rounded flex flex-col justify-between z-99999 p-5">
            <span className="top-0 text-xl flex justify-center">
                {info.title}
            </span>

            <div>
                {info.content}
            </div>

            <div className="flex justify-end gap-3">
                <Button info={{ buttonName: "Annuler", buttonFn: info.onClose }} />
                <Button info={{ buttonName: "Supprimer" }} />
            </div>
        </div>
    )
}