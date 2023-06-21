import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Todo = {
    id: number,
    title: string,
    complete: boolean
}

type TodoState = {
    list: Todo[];
}

const initialState: TodoState = {
    list: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addNewTodo: (state, action: PayloadAction<string>) => {
            console.log(typeof action.payload)
            let flag = false;
            state.list.forEach(elem => {
                if(elem.title === action.payload) flag = true;
            })
            if(!flag) state.list.push({
                id: Date.now(),
                title: action.payload,
                complete: false
            })
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            let newArray = state.list.filter(elem => elem.id !== action.payload);
            state.list = newArray;
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            let newArray = state.list.map(elem => {
                if(elem.id === action.payload) {
                    return {
                        ...elem,
                        complete: !elem.complete
                    }
                }
                else {
                    return elem;
                }
            })
            state.list = newArray;
        }
    }
})

export const {addNewTodo, removeTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;