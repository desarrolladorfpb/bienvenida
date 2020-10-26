import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div id="bocadillo" className="bocadillo"></div>
      <div id="menu">
        <div  class="logo">Manual de bienvenida</div>
        <hr></hr>
        <button id="botonIntro" class="boton_menu">1. Introducción</button><br></br>
        <hr></hr>
        <button id="botonFilo" class="boton_menu">2. Filosofía de la empresa</button>
        <hr></hr>
        <button id="botonprimerdia" class="boton_menu">3. Mi primer día de trabajo</button>
        <hr></hr>
        <button id="botoncomotrabajar"  class="boton_menu">4. Cómo trabajar</button>
        <hr></hr>
        <button id="botoncovid" class="boton_menu">5. Covid</button>
      </div>
      <div id="container">
      <div className="titulo">¡Bienvenido a la empresa!</div>
      <div className="subtitulo">Aquí encontrarás información relevante a la empresa.</div>
      <div id="intro" className="seccion_titulo">1. Introducción</div>
      <div class="subseccion_titulo">1.1. presentación.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="filosofia" class="seccion_titulo">2. Filosofía de la empresa</div>
      <div class="subseccion_titulo">2.1. Valores de la empresa.</div>
      <div class="subseccion_descripcion">Queremos que los nuevos miembros sepan nuestros valores los cuales defendemos hasta último término. A continuación numeraremos cada uno:
      <br></br><br></br><span class="tabulador"><span class="negrita">1.	Honestidad:</span> la transparencia, la sinceridad y la franqueza es una responsabilidad nuestra para con los empleados y esperamos lo mismo de ellos.
      <br></br><span class="negrita">2.	Calidad:</span> Intentamos que los productos cumplan siempre con los parámetros establecidos y prometidos.
      <br></br> <span class="negrita">3.	Puntualidad:</span> nos gusta que nuestros productos estén a tiempo.
      <br></br> <span class="negrita">4.	Respeto al cliente:</span> nuestros clientes son nuestros sustentadores es necesario darle el debido respeto y cualquier falta se estudiará, también somos conscientes de que pueden existir clientes difíciles si es el caso trata de contarlo cuanto antes.
      <br></br><span class="negrita">5.	Pasión:</span> disfrutamos lo que hacemos y esperamos que nuestros empleados sientan lo mismo asi que si tienes algún proyecto que te desmotiva no dudes en contactar con nosotros
      <br></br> <span class="negrita">6.	Trabajo en equipo:</span> una parte muy importante de todas las empresas es un sano trabajo en equipo. Queremos que rápidamente entres en nuestro grupo y haya una buena sinergía desde pronto, todos velaremos por ello.
      <br></br> <span class="negrita">7.	Responsabilidad social:</span> estamos muy conscienciado con la sociedad en la empresa y queremos que nuestros productos sean alcanzables por todos de alguna u otra forma.
      </span><br></br><br></br>Estos son los valores más importantes en la empresa y los que más buscamos en nuestros empleados, esperamos que lo encuentres de tu agrado y si crees que algo se puede cambiar o falta algo puedes decirlo, valoramos mucho las sugerencias.
      </div>
      <div class="subseccion_titulo">2.2. Reacción ante fallos.</div>
      <div class="subseccion_descripcion">
      <br></br>Si tienes errores o “metes la pata” no queremos que te preocupe, y preferimos a que hagas algo a que no lo hagas por mierdo a que no esté corrector. Errar es humano, hasta en la directiva ocurre. No podriamos esperar un buen trabajador si tuviera miedo a equivocarse, queremos que tengas total libertad para ello.
      <br></br><br></br>Equivocarse no es más que una forma de aprender, se te dirá tu error pero no en forma de reprimenda ni mucho menos, si no para que puedas aprender de ello y verás como poco a poco los errores empiezan a ser menos frecuentes.
      <br></br><br></br>Hay muchas formas de fracasar, en ningún caso el error es un fracaso, el fracaso está en no aprender de ello.
      <br></br><br></br>Y si el equipo en su conjunto se equivoca debe encontrar la forma de solucionarlo desde la concordia, comunicandose con los representantes.
      <br></br><br></br>Nadie ha sido expulsado nunca por un error.
      </div>
      <div class="subseccion_titulo">2.3. colaboración en equipo.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="subseccion_titulo">2.4. gestión conflictos.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="primerdia" class="seccion_titulo">3. Mi primer día de trabajo</div>
      <div class="subseccion_titulo">3.1. Jornada.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="subseccion_titulo">3.2. Horarios.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="subseccion_titulo">3.3. Incidencias (citas médicas...).</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="subseccion_titulo">3.4. A quien contacta en caso de dudas.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="comotrabajar" class="seccion_titulo">4. Cómo trabajar.</div>
      <div class="subseccion_titulo">4.1. Cómo nos organizamos (tareas, proyecto…).</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="subseccion_titulo">4.2. Cómo nos administramos.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="subseccion_titulo">4.3. Cómo nos comunicamos.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="subseccion_titulo">4.4. Herramientas software y licencias.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="subseccion_titulo">4.5. Configuración.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="covid" class="seccion_titulo">5. Covid.</div>
      <div class="subseccion_titulo">5.1. Medidas prevención.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="subseccion_titulo">5.2. Teletrabajo.</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      
     
 
      </div>
      {window.onload=()=>{
        function hazfocus(idhacia) {
          let hacia = document.getElementById(idhacia);
          hacia.scrollIntoView();       
      }
      document.getElementById("botonIntro").onclick=()=> hazfocus("intro");
      document.getElementById("botonFilo").onclick=()=> hazfocus("filosofia");
      document.getElementById("botonprimerdia").onclick=()=> hazfocus("primerdia");
      document.getElementById("botoncomotrabajar").onclick=()=> hazfocus("comotrabajar");
      document.getElementById("botoncovid").onclick=()=> hazfocus("covid");
      console.log(getComputedStyle(document.getElementById("primerdia")).scrollTop)
      document.getElementById("container").addEventListener("scroll",()=>{
        console.log(document.getElementById("container").scrollTop)
        let intro = document.getElementById("intro");
        console.log(getComputedStyle(intro));
        var element_height = window.innerHeight;
      },false);
      var menuold;
      var seemenu=false;
      var uno =false;
      window.onclick=()=>{
        if(seemenu&&uno){
          document.getElementById("container").opacity=1;
          let menu = document.getElementById("menu");
          menu.style=menuold;
          seemenu=false;
          uno = false;
          document.getElementById("container").style.opacity=1;
          return 0;
        }
        uno=true;
        return 0;
      }
      document.getElementById("bocadillo").addEventListener("click",()=>{
        let menu = document.getElementById("menu");

        menuold=getComputedStyle(menu);
        menu.style.width="100%";
        seemenu=true;
        document.getElementById("container").style.opacity=0;
        menu.style.opacity=1;
      }, true)
      
      
      
        

      
      }
      }
    </div>
    
  );
}

export default App;
