import { ITodo } from "../types/data"
import { useAppDispatch } from "../hooks"
import { removeTodo, toggleTodo } from "../store/todoSlice";

interface TodoItemProps{
    id: number,
    title: string,
    complete: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({id, title, complete}) => {

    let dispatch = useAppDispatch();

    return (
        <div>
            <h2>{title}</h2>
            <p>{complete ? 'Completed' : 'Not completed'}</p>
            <input type="checkbox" onClick={() => dispatch(toggleTodo(id))}/>
            <button onClick={() => dispatch(removeTodo(id))}>Delete</button>
        </div>
    )
}

export {TodoItem};