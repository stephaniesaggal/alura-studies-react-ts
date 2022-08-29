import React from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from './timer.module.scss'

export default function Timer(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button>
                Começar
            </Button>
        </div>
    )
}