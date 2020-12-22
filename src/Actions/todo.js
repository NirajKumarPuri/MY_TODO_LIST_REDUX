export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const DELETE_ITEM='DELETE_ITEM'
export const addTodoItem = (item) => {
    return {
        type: ADD_TODO_ITEM,
        item: item
    }
}
export const deleteItem=(item)=>{
    return{
        type:DELETE_ITEM,
        item:item
    }
}