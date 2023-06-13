import React from "react";
import { Link } from "react-router-dom";
import { useRef,useEffect,useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import {updateState,removeState} from '../store/userProvider'
import { useNavigate } from "react-router-dom";
import Header from "../globalComponent/header";
import '../style.css'
import DefaultTask from '../images/home/DefaultTask.png'
import DefaultNote from '../images/home/DefaultNote.png'
import arrow1 from '../images/home/arrow1.png' 

function Home() {

  /** SEZIONE STORE */
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const hiddeElement = <li className={'emptyHomeElement'} ><section><div>&nbsp;</div></section></li>
  
  /** SEZIONE NAVIGATE */
  const navigate = useNavigate()
  const [hiddenElemens,sethiddenElemens]   = useState('');
  
  function logout(){
    dispatch(removeState())
    setTimeout(() =>{
      navigate('/', { reloadDocument: true });
    },3000)
  }
  
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
  


  const [stateOpenDesc,setStateOpenDesc] = useState('DescEl noneClass')
  
  /** SEZIONE PER AVERE UNA LISTA DINAMICA DI ELEMENTI ALLINEATI A SINISTRA  */

  const listaElementi = useRef(null)



  function refrehHome(){
          // contatore degli elementi
          var counterElments = 0;
          var arrayElement = [];
          for (const child of listaElementi.current.children) {
              console.log(child.className);
              var className = child.className
              if(className != 'emptyHomeElement'){
                arrayElement.push(child)
                counterElments++
              }
          }
          //const grid = Array.from(listaElementi.current.children);
          const grid = arrayElement;
    
          const baseOffset = grid[0].offsetTop;
          const breakIndex = grid.findIndex(item => item.offsetTop > baseOffset);
          const numPerRow = (breakIndex === -1 ? grid.length : breakIndex);
          console.log('elementi per riga : ' + numPerRow + '/n' + 'elementi per colonna' + grid.length)
          console.log('elementi da inserire vuoti : ' + (grid.length % numPerRow))
          var numeroElementiVuoti = ((grid.length - numPerRow) == 1) ? (-1) : (grid.length % numPerRow);
    
          if(numeroElementiVuoti == 0 ){
            sethiddenElemens('')  
          }
          else if(numeroElementiVuoti == -1){
            var counter = numPerRow - 1;
            var elements = [];
            for(var i = 0; i < counter; i++){
               elements.push(hiddeElement)
            }
            sethiddenElemens(elements)
          }
          else{
            var counter = numPerRow - numeroElementiVuoti;
            var elements = [];
            for(var i = 0; i < counter; i++){
               elements.push(hiddeElement)
            }
            sethiddenElemens(elements)
          }
  }

  useEffect(() => {
    window.addEventListener("resize" , setResize)
  }, []);

  useEffect(() => {
    refrehHome()
    console.log('refresh home')
  }, [windowSize]);


  function openDesc(e){
    console.log(e)
    e.preventDefault()
    var valore = e.target;
    if(valore != null && valore != ' ' && valore != undefined){
    var parentElement = valore.parentElement;
    var descElment = parentElement.querySelector(".DescEl")
    var classAttiva = descElment.classList.contains('activate');
    if(descElment != null){
       if(!classAttiva){
          descElment.classList.remove("noneClass");
          descElment.classList.remove('disActivate')
          descElment.classList.add('DescrizioneElement')
          descElment.classList.add('activate')
       }
       else{
        descElment.classList.remove("DescrizioneElement");
        descElment.classList.remove("activate");
        descElment.classList.add('disActivate')
       }
    }
    }
  }

  function openDescFromImgArrow(e){
    var parentElement1 = e.target.parentElement; // button element
    var partenElement2 = parentElement1.parentElement; 
    var descElment = partenElement2.querySelector(".DescEl")
    var classAttiva = descElment.classList.contains('activate');
    if(descElment != null){
       if(!classAttiva){
          descElment.classList.remove("noneClass");
          descElment.classList.remove('disActivate')
          descElment.classList.add('DescrizioneElement')
          descElment.classList.add('activate')
       }
       else{
        descElment.classList.remove("DescrizioneElement");
        descElment.classList.remove("activate");
        descElment.classList.add('disActivate')
       }
    }

  }

  function goToSection(e){
    e.stopPropagation();
    var value = (e.currentTarget)
    var inputHidden = value.querySelector('input')
    var section = inputHidden.value
    navigate('/'+section, { reloadDocument: true });

  }


  return (
    <>
    {
      /** SEZIONE DELL' HEADER */
      
      <Header/>
      
      
    }
    {
    <section id='homePage'>
      {
        <ul id={'ElementsHomepage'} ref={listaElementi} >
        <li>
          <section>
            <div onClick={(e)=> goToSection(e)}>
              <img src={DefaultTask}/>
              <div className={'TitoloElement'}>TASKS</div>
              <input type={'hidden'} value={'tasks'}></input>
            </div>
            <button className={"btn_homeList"}onClick={(e)=> openDesc(e)}><img onClick={(e)=> openDescFromImgArrow(e)} src={arrow1} /></button>
            <div 
            className={stateOpenDesc}>
                <span>
                  è la sezione in cui si possono inserire dei nuovi task . 
                  I task possono essere utilizzati per :<br/><br/>  
                  1 : segnare dei compiti per una determinata scadenza <br/>
                  2 : assegnare dei compiti ad altri utenti <br/>
                  3 : utilizzare i task come dei promemoria
                </span>
            </div> 
          </section>
        </li>
        <li>
        <section>
              <div onClick={(e)=> goToSection(e)}>
              <img src={DefaultNote} />
              <div className={'TitoloElement'}>NOTES</div>
              <input type={'hidden'} value={'notes'}></input>
            </div>
            <button className={"btn_homeList"} onClick={(e)=> openDesc(e)} >
                 <img src={arrow1} onClick={(e)=> openDesc(e)}/>
            </button>
            <div 
            className={stateOpenDesc}>
                 <span>
                  è la sezione in cui si possono inserire delle note . 
                  le note possono essere utilizzati per :<br/><br/>  
                  1 : aggiungere degli appunti come materiale scolastico o lavorativo <br/>
                  2 : creare degli appunti dinamici per collegarli a eventuali task <br/>
                  3 : segnare collegamenti esterni con altri ambienti di sviluppo<br/>
                 </span>
            </div> 
          </section>
        </li>
        {hiddenElemens} 
      </ul>
      }
    </section>
    

    
    }


  </>
  );
}

export default Home;
