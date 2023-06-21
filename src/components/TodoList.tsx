import React from "react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoListProps {
    list: ITodo[],
    status: boolean,
}

export const TodoList: React.FC<ITodoListProps> = ({list}) => {
    return (
        <div>
            {
                list.map(({id, title, complete}) => <TodoItem  key={id} id={id} title={title} complete={complete}/>)
            }
        </div>
    )
}