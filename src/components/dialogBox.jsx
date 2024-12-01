import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from "react";

const DialogPopup = ({ isOpen, onClose, children, header }) => {
    const dialogRef = useRef(null)
    const handleClose = () => {
        dialogRef.current.close();
        onClose();
    }
    useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
        }else{
        dialogRef.current.close();
        }
    }, [isOpen])
    return (
        <dialog
            ref={dialogRef}
            onClose={handleClose}
            className="rounded-6"
        >
            <div
                className="flex justify-between w-full px-30 pt-30 pb-26"
            >
                <span
                    className="font-bold text-black capitalize text-large"
                >
                    { header }
                </span>
                <div className="flex items-center">
                    <FontAwesomeIcon onClick={handleClose} className="w-20 h-20 text-black cursor-pointer" icon={faXmark} />
                </div>
            </div>
            <div
                className="w-[calc(100%-60px)] mx-auto h-2 bg-neutral-4"
            ></div>
            <div className="h-auto">{children}</div>
        </dialog>
    )
}
export default DialogPopup;