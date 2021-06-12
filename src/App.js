import './App.css';
import React , {useState, useEffect} from 'react';
//importing other components that are created in Components folder
import {Header} from './Components/Header';
import {ToDoList} from './Components/ToDoList';
import {Footer} from './Components/Footer';
import { AddToDo } from './Components/AddToDo';
import { About } from './Components/About';
//importing below for ROuting from one page to another without reloading of the page
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  //parsing todo from the local storage that is created in the webApp to show in the browser
  if (localStorage.getItem("todos") === null){
    initTodo=[]; //if no items were created, initial the list will be null
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //creating function for onDelete that will be used when user will delete the display todo item on the screen
  //it will be passed in the ToDoList page
  const onDelete= (todo) => {
    console.log("I an OnDelete of todo" , todo);

    setTodos(todos.filter((e) => {
      return e!==todo;
    }));

    console.log("Deleted" , todos);

    localStorage.setItem("todos" , JSON.stringify(todos));
  }

  //creating function to AddToDo to the screen that will be passed in the AddToDo file
  const addTodo = (title, desc) => {
    console.log("I am adding this todo" , title , desc)
    let sno; 
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno= todos[todos.length-1].sno + 1; 
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo]);

    console.log(myTodo); 
    
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos));
  }, [todos])

  return (
    <>
    
    {/* all components to be rendered in every pagewill be passed inside Router */}
    <Router>
    <Header title="My Todo List" />

    {/* inside switch, we will set path and the page will be rendered only when the component is linked with the mentioned path */}
    <Switch>
          <Route exact path="/" render = { () => {
            return (
            <> 
            {/* here components with '/' path will be rendered  */}
              <AddToDo addTodo={addTodo} />
              <ToDoList todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          {/* now, the components with linked path about will be rendered */}
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    <Footer />
    </Router>
    </>  
  );
}

export default App;
