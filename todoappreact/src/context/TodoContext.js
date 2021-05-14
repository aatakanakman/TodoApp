import React ,{createContext , useContext , useReducer} from 'react';


export const ToDoLaterContext = createContext();

export const TodoLater = ({initialState , reducer , children}) => (
    <ToDoLaterContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </ToDoLaterContext.Provider>
)


export const UseTodoLayerValue = () => useContext(ToDoLaterContext);