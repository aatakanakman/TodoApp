import todo from "../components/Todo";

export const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        //!! Direkt olarak state içerisindeki todos arrayini değiştirmemek için, kopasını değiştirdik. Önemli!
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };
    case "COMPLATE_TODO":
      return {
        ...state,
        //!! Direkt olarak state içerisindeki todos arrayini değiştirmemek için, kopasını değiştirdik. Önemli!
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            isComplated: !todo.isComplated,
          };
        }),
      };


      case "UPDATE_TODO":
      return {
        ...state,
        //!! Direkt olarak state içerisindeki todos arrayini değiştirmemek için, kopasını değiştirdik. Önemli!
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.todoId) {
            return todo;
          }         
          return {
            ...todo,
            content : action.payload.newValue,
          };
        }),
      };
    

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
