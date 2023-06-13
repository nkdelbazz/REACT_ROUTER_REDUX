import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Todos from './pages/todos'
import Todo from './pages/todo'
import TodoNew from './pages/todo_new'
import Tasks from './pages/tasks';
import NotFound from './pages/notfound.js'
import Autentication from './middleware/autentication';


function App() {
  return (
    <>
    
    <Routes>
        <Route element={<Autentication />}> 
          <Route path="/"  element= {<Home/>}/>
          <Route path="/todos" element={<Todos />} />
          <Route path="/todo">
            <Route path=":id" element={<Todo />} />
            <Route path="new" element={<TodoNew />} />
          </Route>
          <Route path="/tasks">
            <Route index element={<Tasks />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/login" element= {<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
