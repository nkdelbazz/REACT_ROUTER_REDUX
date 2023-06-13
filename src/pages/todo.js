import { Link } from "react-router-dom";
import { useParams,useOutletContext } from "react-router-dom";
import React from "react";

function Todo() {
  const { id } = useParams()
    return (
      <React.Fragment>
      <h1>todo n - {id}</h1>
      <h1>ActionValue : </h1>
      <ul>
          <li><Link reloadDocument to="/">Home</Link></li>
          <li><Link reloadDocument to="/todos">Todos</Link></li>
      </ul>  
      </React.Fragment>
    );
  }
  
  export default Todo;
  