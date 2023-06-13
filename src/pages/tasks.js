import { Link } from "react-router-dom";
import { useParams,useOutletContext } from "react-router-dom";
import React from "react";
import Header from "../globalComponent/header";
import '../style.css'

import svGcheck  from "../images/tasks/sidebar/check.svg";
import svGcrosscircle     from "../images/tasks/sidebar/cross-circle.svg"
import svGplus             from "../images/tasks/sidebar/plus.svg"
import svGsettingssliders from "../images/tasks/sidebar/settings-sliders.svg"
import svGstats            from "../images/tasks/sidebar/stats.svg"

import arrow1 from '../images/home/arrow1.png' 

function Tasks() {
  const { id } = useParams()

  /* SEZIONE TARGET DISPLAY NONE / FLEX */
  
  function openSection(e){
    var valore = e.target;
    if(valore != null && valore != ' ' && valore != undefined){
    var parentElement = valore.parentElement;
    var descElment = parentElement.querySelector(".Container_Flex")
    var sezioneChiusa = descElment.classList.contains('noneClass');
    if(descElment != null){
       if(!sezioneChiusa){
          descElment.classList.add("noneClass");
          valore.classList.remove('BorderRadiusBottom_None');
          descElment.classList.remove("activate");
       }
       else{
        descElment.classList.remove('noneClass');
        descElment.classList.add("activate");
        valore.classList.add("BorderRadiusBottom_None");
       }
    }
    }
  }

  function closeAside(e)
  {
    e.stopPropagation();
    var valore = e.target;
    var nextValore = valore.nextSibling;
    console.log(nextValore)
    var close = valore.classList.contains('dispNone');
    var tagName = valore.tagName

    if(tagName === 'ASIDE'){
      if(close != false){
        valore.classList.remove('dispNone');
        valore.classList.add("activate");
       }
       else{
        valore.classList.remove('activate');
        valore.classList.add('dispNone');
       }
    }

  }

  function openInfo(e){
    var el = e.currentTarget;
    var popup = el.querySelector("div")
    popup.classList.toggle("noneClass");
    //console.log(popup)
    
    //popup.classList.toggle("show");
  }


  function checkSidebarbutton(e){
    
    var el = e.currentTarget;
    var parent = el.parentElement;
    var check = el.classList.contains('check')


    const elements = Array.from(parent.getElementsByClassName('check'));
    elements.forEach((element) => {
      console.log(element)
      element.classList.remove('check');
    });
    
    if(check){
      el.classList.remove('check'); 
    }
    else{
      el.classList.add('check');
    }
  }



  function handlePopUpClick(e){
    var el = e.currentTarget;
    var popup = el.querySelector("#myPopup")
    popup.classList.toggle("show");
  }
  

    return (
      <React.Fragment>
    {
      /** SEZIONE DELL' HEADER */
      <Header/> 
    }
    {

<div className={'Container_Flex wrapPageTasks'}>
    <aside onClick={(e)=>{closeAside(e)}}>
      <div onMouseOver={(e)=>{openInfo(e)}} onMouseOut={(e)=>{openInfo(e)}} onClick={(e)=>{checkSidebarbutton(e)}}>
          <img src={svGcheck}           alt="My Happy SVG"/>
          <div className={'noneClass'}>task finiti</div>
      </div>
      <div onMouseOver={(e)=>{openInfo(e)}} onMouseOut={(e)=>{openInfo(e)}} onClick={(e)=>{checkSidebarbutton(e)}}>
          <img src={svGcrosscircle}     alt="My Happy SVG"/>
          <div className={'noneClass'}>elimina i task<br></br>(non finiti)</div>
      </div>
      <div onMouseOver={(e)=>{openInfo(e)}} onMouseOut={(e)=>{openInfo(e)}} onClick={(e)=>{checkSidebarbutton(e)}}>
          <img src={svGplus}            alt="My Happy SVG"/>
          <div className={'noneClass'}>aggiungi dei task</div>
      </div>
      <div onMouseOver={(e)=>{openInfo(e)}} onMouseOut={(e)=>{openInfo(e)}} onClick={(e)=>{checkSidebarbutton(e)}}>
          <img src={svGsettingssliders} alt="My Happy SVG"/>
          <div className={'noneClass'}>impostazioni filtri</div>
      </div>
      <div onMouseOver={(e)=>{openInfo(e)}} onMouseOut={(e)=>{openInfo(e)}} onClick={(e)=>{checkSidebarbutton(e)}}>
          <img src={svGstats}           alt="My Happy SVG"/>
          <div className={'noneClass'}>statistiche dei task</div>
      </div>
    </aside>
    <section id='TasksDifficolta'>

        <div className={'filterContainer'}>
          <div className={'filterDiff'}>
            <span>Filtro</span>
            <button><img className={'arrowDown'} src={arrow1} /></button>
          </div>
          <div className={'filterDiff'}>
            <span>Filtro per difficoltà</span>
            <button><img className={'arrowDown'} src={arrow1} /></button>
          </div>
          <div className={'filterDiff'}>
            <span>Filtro per difficoltà</span>
            <button><img className={'arrowDown'} src={arrow1} /></button>
          </div>
          <div className={'filterDiff'}>
            <span>Filtro per difficoltà</span>
            <button><img className={'arrowDown'} src={arrow1} /></button>
          </div>
          <div className={'filterDiff'}>
            <span>Filtro per difficoltà</span>
            <button><img className={'arrowDown'} src={arrow1} /></button>
          </div>
          <div className={'filterDiff'}>
            <span>Filtro per difficoltà</span>
            <button><img className={'arrowDown'} src={arrow1} /></button>
          </div>
          <div className={'filterDiff'}>
            <span>Filtro per difficoltà</span>
            <button><img className={'arrowDown'} src={arrow1} /></button>
          </div>
        </div>

          <ul>
            <li className={'Diff_altissima'}>
              <span onClick={(e)=> openSection(e)}>Difficoltà altissima</span>
              <div className={'Container_Flex noneClass'}>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
              </div>
            </li>
            <li className={'Diff_alta'}>
              <span onClick={(e)=> openSection(e)}>Difficoltà alta</span>
              <div className={'Container_Flex noneClass'}>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
              </div>
            </li>
            <li className={'Diff_media'}>
              <span onClick={(e)=> openSection(e)}>Difficoltà media</span>
              <div className={'Container_Flex noneClass'}>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
              </div>
            </li>
            <li className={'Diff_normale'}>
              <span onClick={(e)=> openSection(e)}>Difficoltà bassa</span>
              <div className={'Container_Flex noneClass'}>
                <div className={'tskDiff_element'}>
                  <span className={'prova'}>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
                <div className={'tskDiff_element'}>
                  <span>TSK3334</span>
                  <div>risoluzione dei problemi associati al funzionamento generale della applicazione </div>
                </div>
              </div>
            </li>
          </ul>
          </section>  
</div>



    }
      </React.Fragment>
    );
  }
  
  export default Tasks;
  