import { ADD_TODO_ITEM,DELETE_ITEM } from "../Actions/todo";

let initialState = {
    todoItems: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            let newTodoItems = [...state.todoItems]
            newTodoItems.push(action.item)
            return {
                todoItems: newTodoItems
            }
            case DELETE_ITEM:
                let left=state.todoItems.slice(0,action.item)
                let right=state.todoItems.slice(action.item+1)
                return{
                       todoItems:left.concat(right)
                }
        default: return state
    }
}