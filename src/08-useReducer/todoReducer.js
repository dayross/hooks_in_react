

export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'abc':
            throw new Error('ABC no implementado')
            break;
    
        default:
            return initialState;
    }

}