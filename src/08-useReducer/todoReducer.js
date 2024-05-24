

export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [...initialState, action.payload];
            break;
        case '[TODO] edit todo':
            throw new Error('ABC no implementado')
            break;
        case '[TODO] delete todo':
            throw new Error('ABC no implementado')
            break;
        default:
            throw new Error('Acción no implementada')
    }

}