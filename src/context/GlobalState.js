import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//This is the initial state
const initialState = {
    transactions: []
}

//This creates the context
export const GlobalContext = createContext(initialState)

//Creates Provider component 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer (AppReducer, initialState);

//actions that make calls to our reducer
function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload : id
    });
}

function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

//provides state and actions to components it is wrapped around
 return(<GlobalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction
 }}> 
    {children}
</GlobalContext.Provider>)
}

