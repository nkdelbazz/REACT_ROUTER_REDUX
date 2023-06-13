import { Link } from "react-router-dom";
import React from "react";

function Todos() {
    return (
      <React.Fragment>
      <h1>login Please</h1>
        <ul>
          <li>show all todos</li>
          <li><Link reloadDocument to="/todo/1">Todo(1)</Link></li>
          <li><Link reloadDocument to="/todo/2">Todo(2)</Link></li>
          <li><Link reloadDocument to="/todo/3">Todo(3)</Link></li>
        </ul>  
        <ul>
          <li>New Todo</li>
          <li><Link reloadDocument to="/todo/new">new</Link></li>
        </ul> 
      </React.Fragment>
      
    );
  }
  
  export default Todos;
  