import { Link,useParams,useNavigate} from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import '../style.css'

function NotFoundPage() {
  const navigate = useNavigate()
  useEffect(() =>{
    setTimeout(() =>{
     navigate('/', { reloadDocument: true });
    },3000)
  } ,[]) 
    return (
      <React.Fragment>
       <section id="NotFoundPage">
         <span>PAGE NOT FOUND ERROR : 404</span>
         <div className={'loading_v1'}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
         </div>
       </section>
      </React.Fragment>
    );
  }
  
  export default NotFoundPage;
  