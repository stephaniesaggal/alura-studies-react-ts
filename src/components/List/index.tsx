import React from "react";
import Item from "./Item";
import style from './list.module.scss';

export default function List() {
    const tarefas = [
        {
        tarefa: 'React',
        tempo: '02:00:00'
        },
        {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
        }
    ]
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        //importa com props
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}