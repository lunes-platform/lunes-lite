import { useState } from "react"
import ValidatorIcon from "../../assets/images/close-square.svg"
import "../index.css"
import { IModalPrompt } from "../types"


const ModalPrompt = (props: IModalPrompt) => {
    const [fieldError, setFieldError] = useState("")
    const errorClass = fieldError ? "has-error" : ""
    const [text, setText] = useState("")

    const handleConfirmAction = () => {
        if (!text) {
            setFieldError(props.options?.validationErrorMessage)
            return
        }

        props.onConfirm(text)
    }

    return (
        <div className="modal">
            <h2 className="headline">{props.headline}</h2>
            <p className="message">
                {props.message}
            </p>

            <div className="input-box">
                <input type="text" placeholder="Digite sua senha" className={`input ${errorClass}`} onChange={event => setText(event.target.value)} />
            </div>


            {fieldError && <div className="row field-validator">
                <img src={ValidatorIcon} alt="" />
                <small className="validator-text">{fieldError}</small>
            </div>}

            <div className="row button-holder">
                <button className="button">Cancelar</button>
                <button className="button" onClick={handleConfirmAction}>Finalizar</button>
            </div>
        </div>
    )
}

export default ModalPrompt