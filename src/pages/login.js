import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import React from "react";
import '../style.css'
import validator from "validator"
import { useSelector,useDispatch } from 'react-redux';
import {updateState,removeState} from '../store/userProvider'
import { useNavigate } from "react-router-dom";



function Login() {
  /** SEZIONE NAVIGATE */
  const navigate = useNavigate()

  //** SEZIONE STORE  */
  const userSlice = useSelector(store => store.user) // serve per valorizzare l' utetne attivo
  const dispatch = useDispatch()


  //** INIZIALIZZAZIONE DEL FORM : */
  const [utente  ,setUtente  ]   = useState('');
  const [email   ,setEmail   ]   = useState('');
  const [password,setPassword]   = useState('');

  //** INIZIALIZZAZIONE DEL FORM in errore: */
  const [utenteErr   ,setutenteErr  ]   = useState('');
  const [emailErr    ,setemailErr   ]   = useState('');
  const [passwordErr ,setpasswordErr]   = useState('');

  //** AGGIORNAMENTO DEGLI INPUT DEL FORM : */
  const updateElement = event => {
    var element = event.target.value;
    var id = event.target.id;
    switch (id) {
        case 'loginUtente':
          setUtente(element)
        break;
        case 'loginEmail':
          setEmail(element)
        break;
        // *************************
        case 'loginPassword':
          setPassword(element)
        break;
      default:
        console.log(`nessun dato`);
    }
    console.log('valore dell id : ' + id + 'valore dell elemento : ' + element);
  };
  

  //** AGGIORNAMENTO DEGLI INPUT DEL FORM : */
  useEffect((event) => {
    const timer = setTimeout(() => {

        var errorUtente = '';
        if(((utente.trim()).length) < 4 && utente != ''){
          errorUtente = (<ul className={"errorText"}><li>utente non consentito</li></ul>);
        }
        setutenteErr(errorUtente)

        var errorEmail = '';
        if(!(validator.isEmail(email)) && email != ''){
          errorEmail = (<ul className={"errorText"}><li>Email non consentita</li></ul>);
        }
        setemailErr(errorEmail)


        var errorPassword = '';
        if(!(validator.isStrongPassword(password)) && password != ''){
          errorPassword = (<ul className={"errorText"}><li>password non consentita</li></ul>);
        }
        setpasswordErr(errorPassword)

    }, 600)
    return () => clearTimeout(timer)
  }, [utente,email,password])


/** sezione form submit */
function loginSubmit(){
  var txt = 'token attivato' 
  localStorage.setItem('todo_user_react_token','token attivato')
  dispatch(updateState(txt))
  setTimeout(() =>{
    navigate('/', { reloadDocument: true });
  },3000)
}



/**TEMPLATE DEL FORM */

    return (
      <React.Fragment>
        <div className={"login"}>
          <div><span className="loginFontStyle">Login</span></div>
          <ul className={"login_wrap"}>
            <li>
               <div><span className="loginFontStyle">Utente</span></div>
               <div>
                   {
                    <input id={'loginUtente'}
                      onChange={updateElement}
                      value={utente}
                      >
                    </input>
                   }
                  {utenteErr}
               </div>
            </li>
            <li>
               <div><span className="loginFontStyle">Email</span></div>
               <div>
                  {
                    <input id={'loginEmail'}
                      onChange={updateElement}
                      value={email}
                      >
                    </input>
                   }
                    {emailErr}
               </div>
            </li>
            <li>
               <div><span className="loginFontStyle">Password</span></div>
               <div>
                  {
                    <input id={'loginPassword'}
                      onChange={updateElement}
                      value={password}
                      >
                    </input>
                   }
                    {passwordErr}
               </div>
            </li>
            <li><button onClick={() => {loginSubmit()}}><span className="loginFontStyle">Submit</span></button></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
  
  export default Login;
  