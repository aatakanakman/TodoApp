import React , {useState , useEffect,useRef} from 'react'
import { UseTodoLayerValue } from './context/TodoContext'
import TodoList from './components/TodoList'
import todo from './components/Todo';
import "./App.css"


const App = () => {

  const [{ todos },dispatch] = UseTodoLayerValue();
  
  const [content , setContent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {

    //! İlk render dan sonra inputa otomatik olarak focus olunmasını sağladık.
    inputRef.current.focus();

  },[])
  
  const handleSubmit = (event) => {

    event.preventDefault();

    if(!content && content.length < 1) return;

    const newTodo = {
      id : Math.floor(Math.random() * 4314123),
      content,
      isComplated : false,
    };

    dispatch({
      type : "ADD_TODO",
      payload : newTodo,
    })

    setContent("");

  }

  return (
    <div className = "container">
      <h1>Todo App</h1>
      <form onSubmit= {handleSubmit} className= "todo-form">
        <input ref={inputRef} className = "todo-input" type = "text" onChange = {event => setContent(event.target.value)} value = {content}></input>
          <button className = "todo-button">Ekle</button>
      </form>

      {/* todo listesi */}

      <TodoList todos = {todos}></TodoList>
    </div>
  )
}

export default App
