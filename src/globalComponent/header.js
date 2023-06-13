import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import {updateState,removeState} from '../store/userProvider'
import { useRef,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './header.module.css'
import '../style.css'



function Header() {

  //** SEZIONE STORE  */
  const userSlice = useSelector(store => store.user) // serve per valorizzare l' utetne attivo
  const dispatch = useDispatch()

  const burgerHeader = <svg xmlns="http://www.w3.org/2000/svg" width="113" height="54" viewBox="0 0 113 54" fill="none">
                          <rect width="113" height="14" fill="#A88D8D" fill-opacity="0.69"/>
                          <rect y="20" width="113" height="14" fill="#A88D8D" fill-opacity="0.69"/>
                          <rect y="40" width="113" height="14" fill="#A88D8D" fill-opacity="0.69"/>
                       </svg>

  //** SEZIONE UseRef ( DOM HTML)  */
  const header = useRef(null)

  /** SEZIONE NAVIGATE */
  const navigate = useNavigate()
  const [displayItems,setDisplayItems] = useState('none')

  function logout(){
    dispatch(removeState())
    setTimeout(() =>{
      navigate('/', { reloadDocument: true });
    },3000)
  }

  useEffect(() => {
    // gestione della navbar
    console.log(header.current.children.length)
    var numeroElementi = header.current.children.length;

  }, [])

    /** SEZIONE RESIZE */
  
    const getSizeWindow = () => {
      return {
        innerHeight : window.innerHeight,
        innerWidth : window.innerWidth
      };
    }
    
    
    const [windowSize,setWindowSize] = useState(getSizeWindow)
    function setResize(){
      setWindowSize(getSizeWindow())
      
    }
    
    function viewElements(){
      var value = (displayItems == 'none') ? 'flex' : 'none'
      setDisplayItems(value)
    }

    useEffect(() => {
      window.addEventListener("resize" , setResize)
    }, []);

    useEffect(() => {
      if(window.innerWidth <= 1000){
      //  alert('testo piccolo')
      setDisplayItems('none')
      }
      else{
      setDisplayItems('flex')
      }
    }, [windowSize]);


    function navigateTO(path)
    {
      navigate('/'+path, { reloadDocument: true });
    }

  return (
    <>
      <div id={styles.headerBar}>
        <div>Home</div>
        <div onClick={()=> {viewElements()}}>{burgerHeader}</div>
      </div>
      <nav id={styles.header} style={{display:displayItems}} ref={header}>
        <div onClick={(e) => {navigateTO('')}} className={styles.element}>&nbsp;Home&nbsp;</div>
        <div className={styles.element}>&nbsp;Info&nbsp;</div>
        <div className={styles.element}>&nbsp;Categories&nbsp;</div>
        <div className={styles.element}>&nbsp;Favorites&nbsp;</div>
        <div className={styles.space}>&nbsp;</div>
        <div className={styles.element}>Login</div>
      </nav>
    </>
  );
}

export default Header;
