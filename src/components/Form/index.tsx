import React from "react";
import Button from "../Button";
import style from './form.module.scss'

class Form extends React.Component{
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                    />
                    <Button>
                        Adicionar
                    </Button>
                </div>
            </form>
        )
    }
}

export default Form;