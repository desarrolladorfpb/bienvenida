import logo from './logo.svg';
import './App.css';
import LottieWelcome from './LottieWelcome.js'
import { Waypoint } from 'react-waypoint';
import LottieValores from './Lottievalores';
import LottiePrimerdia from './LottiePrimerdia';
import LottieConfiguration from './Lottieconfiguration';
import LottieCovid from './LottieCovid';
function App() {
  
  return (
    <div className="App">
      <div  id="bocadillo" className="bocadillo"><img src="/menu.svg"></img></div>
      <div id="menu">
        <div id="logo" className="logo">Manual de bienvenida</div>
        <hr></hr>
        <button id="botonIntro" className="boton_menu">1. Introducción</button>
        <hr></hr>
        <button id="botonFilo" className="boton_menu">2. Filosofía de la empresa</button>
        <hr></hr>
        <button id="botonprimerdia" className="boton_menu">3. Mi primer día de trabajo</button>
        <hr></hr>
        <button id="botoncomotrabajar"  className="boton_menu">4. Cómo trabajar</button>
        <hr></hr>
        <button id="botoncovid" className="boton_menu">5. Prevención COVID-19.</button>
      </div>
      <div id="container">
        <LottieWelcome></LottieWelcome>
      <div className="titulo">¡Bienvenido a la empresa!</div>
      <div className="subtitulo">Aquí encontrarás información relevante.</div>
      <div id="intro" className="seccion_titulo">1. Introducción</div>
      <br></br><br></br>
      <div className="subseccion_titulo">1.1. Presentación.</div>
      <br></br>
      ¡Hola, bienvenido/a a nuestro equipo!
      <br></br><br></br>Hoy, queremos darte la bienvenida a nuestro equipo y desearte mucha suerte en esta nueva etapa profesional.
      <br></br><br></br>Este manual está pensado para ti, para que como nuevo integrante de nuestra empresa, dispongas de toda la información que necesites en tu nuevo puesto de trabajo.

      <br></br><br></br>Entre esta información encontrarás principalmente una descripción de nuestra filosofía de empresa y de nuestra manera de trabajar, incluyendo instrucciones básicas para tu primer día de trabajo. 

      <br></br><br></br>Ya que somos conscientes de la difícil situación actual y de la necesidad de la prevención referente al COVID-19, también te proporcionaremos las medidas preventivas que hemos tomado para conseguir un entorno de trabajo seguro. 

      <br></br><br></br>Por último, hemos añadido un servicio de asistencia donde daremos las facilidades oportunas para aquellos que tengan que llevar a cabo su trabajo de forma remota.

      <br></br><br></br>Te animamos a seguir leyendo este manual y esperamos que te sientas agusto con nosotros.
      <br></br><br></br>
      <LottieValores></LottieValores>
      <div id="filosofia" className="seccion_titulo">2. Filosofía de la empresa</div>
      <br></br><br></br>
      <div className="subseccion_titulo">2.1. Valores de la empresa.</div>
      <br></br>
      <div className="subseccion_descripcion">Queremos que los nuevos miembros sepan nuestros valores los cuales defendemos hasta último término. A continuación numeraremos cada uno:
      <br></br><br></br><span className="tabulador"><span className="negrita">1.	Honestidad:</span> la transparencia, la sinceridad y la franqueza es una responsabilidad nuestra para con los empleados y esperamos lo mismo de ellos.
      <br></br><span className="negrita">2.	Calidad:</span> Intentamos que los productos cumplan siempre con los parámetros establecidos y prometidos.
      <br></br> <span className="negrita">3.	Puntualidad:</span> nos gusta que nuestros productos estén a tiempo.
      <br></br> <span className="negrita">4.	Respeto al cliente:</span> nuestros clientes son nuestros sustentadores es necesario darle el debido respeto y cualquier falta se estudiará, también somos conscientes de que pueden existir clientes difíciles si es el caso trata de contarlo cuanto antes.
      <br></br><span className="negrita">5.	Pasión:</span> disfrutamos lo que hacemos y esperamos que nuestros empleados sientan lo mismo asi que si tienes algún proyecto que te desmotiva no dudes en contactar con nosotros
      <br></br> <span className="negrita">6.	Trabajo en equipo:</span> una parte muy importante de todas las empresas es un sano trabajo en equipo. Queremos que rápidamente entres en nuestro grupo y haya una buena sinergía desde pronto, todos velaremos por ello.
      <br></br> <span className="negrita">7.	Responsabilidad social:</span> estamos muy conscienciado con la sociedad en la empresa y queremos que nuestros productos sean alcanzables por todos de alguna u otra forma.
      </span><br></br><br></br>Estos son los valores más importantes en la empresa y los que más buscamos en nuestros empleados, esperamos que lo encuentres de tu agrado y si crees que algo se puede cambiar o falta algo puedes decirlo, valoramos mucho las sugerencias.
      </div>
      <br></br><br></br>
      <div className="subseccion_titulo">2.2. Reacción ante fallos.</div>
      <br></br>
      <div className="subseccion_descripcion">
      Si tienes errores o “metes la pata” no queremos que te preocupe, y preferimos a que hagas algo a que no lo hagas por miedo a que no esté correcto. Errar es humano, hasta en la directiva ocurre. No podriamos esperar un buen trabajador si tuviera miedo a equivocarse, queremos que tengas total libertad para ello.
      <br></br><br></br>Equivocarse no es más que una forma de aprender, se te dirá tu error pero no en forma de reprimenda ni mucho menos, si no para que puedas aprender de ello y verás como poco a poco los errores empiezan a ser menos frecuentes.
      <br></br><br></br>Hay muchas formas de fracasar, en ningún caso el error es un fracaso, el fracaso está en no aprender de ello.
      <br></br><br></br>Y si el equipo en su conjunto se equivoca debe encontrar la forma de solucionarlo desde la concordia, comunicandose con los representantes.
      <br></br><br></br>Nadie ha sido expulsado nunca por un error.
      </div>
      <br></br><br></br>
      <div className="subseccion_titulo">2.3. Colaboración en equipo.</div>
      <br></br>
      Trabajar en equipo permite que los empleados sean más rápidos y efectivos en su trabajo, por eso en nuestra empresa promovemos la colaboración entre nuestros trabajadores.
      <br></br><br></br>Para ello debes mantener un buen trato con tus compañeros, escuchar con atención las opiniones de los demás y respetarlas.
      <br></br><br></br>Si te surge alguna duda puedes consultar a cualquiera de tus compañeros y ellos se encargarán de ayudarte.
      <br></br><br></br>Todos los miembros del equipo trabajan hacia el logro de una misma meta pensando, intercambiando ideas y ofreciendo diferentes perspectivas para brindar soluciones. Cada miembro tiene oportunidades equitativas de participar y comunicar sus ideas.
      <br></br><br></br>
      <div className="subseccion_titulo">2.4. Gestión conflictos.</div>
      <br></br>
      Si observas un conflicto entre compañeros de trabajo, no esperes a que se convierta en algo peor, comunícalo cuanto antes para poder resolverlo mediante diálogo y negociación.
      <br></br><br></br>En ese momento, se convocará una reunión con los trabajadores y se hará un debate sobre el problema hasta acordar una solución final en la que estén de acuerdo todas las partes implicadas.
      <LottiePrimerdia></LottiePrimerdia>
      <div id="primerdia" className="seccion_titulo">3. Mi primer día de trabajo</div>
      <br></br><br></br>
      <div className="subseccion_titulo">3.1. Jornada.</div>
      <br></br>
      En nuestra empresa nos caracterizamos por tratar bien a nuestros trabajadores, a diferencia de la inmensa mayoría de la competencia. Es por ello, que la jornada laboral es de 10 horas semanales.
      <br></br><br></br>
      <div className="subseccion_titulo">3.2. Horarios.</div>
      <br></br>
      
      El horario de trabajo será variable según las circunstancias de cada uno, siempre que se cumpla con el trabajo necesario de cara a las fechas límites que se acuerden colectivamente.
      <br></br><br></br>
      <div className="subseccion_titulo">3.3. Incidencias (citas médicas...).</div>
      <br></br>
      En caso de tener un problema médico justificado, te podrás ausentar del trabajo el tiempo necesario previo aviso.
      <br></br>Lo mismo se aplicaría si tuvieras que atender una urgencia familiar.
      <br></br><br></br>
      <div className="subseccion_titulo">3.4. A quien contactar en caso de dudas.</div>
      <br></br>
      El primer día, habrá una persona que será la encargada de mostrarte las instalaciones, de presentarte a tus compañeros y al resto del personal, además de proporcionarte los aspectos básicos para la configuración de tu entorno de trabajo. Si tienes alguna duda, cualquier compañero de trabajo estará dispuesto a ayudarte, aunque el encargado principal de resolver tus dudas será el coordinador de personal.
      
      <LottieConfiguration></LottieConfiguration>
      <div id="comotrabajar" className="seccion_titulo">4. Cómo trabajar.</div>
      <br></br><br></br>
      <div className="subseccion_titulo">4.1. Herramientas de software y licencias.</div>
      <br></br>
      Para facilitarte el trabajo empleamos una serie de herramientas que consideramos apropiadas para cada uno de sus ámbitos y que te permitirán interactuar con los otros miembros del equipo.

      <br></br><br></br>Las herramientas que debes instalar y poner a punto para ponerte manos a la obra cuanto antes son las siguientes:
      <span className="tabulador">
      <br></br> <i>1. Slack:</i> como herramienta de comunicación.
      <br></br> <i>2. Discord:</i> para reuniones de voz y vídeo.
      <br></br>  <i>3. Google Drive:</i> para compartir documentación.
      <br></br>  <i>4. Correo corporativo:</i> para recibir mensajes importantes y contactar con clientes.
      <br></br>  <i>5. BlackBoard:</i> para realizar entregas.
      <br></br>  <i>6. GitHub:</i> para el control de versiones del código fuente.
      <br></br>  <i>7. Clockify:</i> para trackear el tiempo.
      <br></br>  <i>8. Google Calendar:</i> para mantener el control de fechas importantes.
      </span>
      <br></br><br></br> Estas herramientas deberás usarlas de forma correcta y con cierta maestría, para que tu trabajo sea de calidad. En caso de tengas dudas con alguna de estas herramientas, simplemente ponte en contacto con cualquier compañero o con tu coordinador para que pueda ayudarte. 

      <br></br><br></br> En cuanto a las licencias, para la mayoría de ellas usaremos la versión gratuita. En el caso de que seas estudiante, para GitHub te recomendamos que uses la versión pro de la que dispones como estudiante con el GitHub Student Developer Pack.
      <br></br><br></br>
      <div className="subseccion_titulo">4.2. Comunicación.</div>
      <br></br>
      Algunas de las herramientas nombradas te facilitarán la comunicación con tu equipo, la realización de tareas y actividades de un proyecto. 

      <br></br><br></br>Para comunicaciones internas dispondrás de Slack y recuerda usar el canal apropiado, y a ser posible, mencionar a las personas que quieres que lean el mensaje para que sean notificadas. También te recomendamos activar extensiones de Slack como Google Drive, GitHub o Google Calendar para que se te avise en un canal de las modificaciones o comentarios que se realizan en estas plataformas y puedas estar al día.

      <br></br><br></br> Si tienes una duda sencilla de qué elegir en algún momento, te recomendamos que uses la extensión Simple Poll de Slack que te permite realizar encuestas en las que puedan votar tus compañeros y así ayudarte a escoger la mejor opción.

      <br></br><br></br>Para las comunicaciones externas te recomendamos que uses el correo corporativo ya que te identifica como miembro de la empresa y evita que el correo acabe en spam.

      <br></br><br></br>En cuanto a las reuniones, se convocarán por un canal de Slack y además se incorporarán a Google Calendar. Debes ser puntual y mirarte los puntos indicados antes de asistir para poder opinar y encontrar entre todos la mejor solución.
      <br></br><br></br>
      <div className="subseccion_titulo">4.3. Metodología de trabajo.</div>
      <br></br>
      Para los proyectos de desarrollo software usaremos la metodología ágil Scrum, con la que suponemos que ya estás familiarizado.

      <br></br><br></br>Si no es así, en la metodología Scrum se trabajará por iteraciones de una duración fija llamada sprint. Las tareas a realizar se encuentran en el Product Backlog y en cada sprint se selecciona un subconjunto para el Sprint Backlog. Dichas tareas las priorizaremos en equipo en la reunión Sprint Meeting usando la metodología poker. La metodología poker consiste en definir, en comuna, la estimación de esfuerzo o tamaño de cada una de las tareas que se encuentran en el Sprint Backlog. 

      <br></br><br></br> Se realizan una serie de reuniones:
      <span className="tabulador">
       <i>1. Sprint Meeting:</i> para planificar el Sprint y estimar las tareas del Sprint Backlog.
      <br></br>  <i>2. Daily Sprint:</i> reunión diaria en la que debes decir qué hiciste el día anterior, si tuviste problemas y qué vas a hacer hoy.
      <br></br>  <i>3. Sprint Retrospective:</i> reunión final donde se realiza una revisión del trabajo realizado durante el sprint. Todo ello, para que el equipo mejore en los siguientes sprints. 
        </span>
        <br></br> Tu supervisor será el Scrum Master, que velará por que sigas las directrices de Scrum y el Product Owner es el encargado de representar los intereses del cliente.
        <br></br><br></br>
      <div className="subseccion_titulo">4.4. Trabajar en un proyecto.</div>
      <br></br>
      Cuando te embarques en un proyecto, tus tareas se te asignarán en un tablero KanBan alojado en GitHub. Es importante que muevas las tareas para que el resto de compañeros sepan cómo va tu trabajo.

	    <br></br><br></br>Si terminas tus tareas con tiempo de sobra, se lo debes comentar a tu coordinador, que decidirá si asignarte otra tarea o bien si puedes ayudar a algún compañero que tenga dificultades.

      <br></br><br></br>
      <LottieCovid></LottieCovid>
      <div id="covid" className="seccion_titulo">5. Prevención COVID-19.</div>
      <br></br><br></br>
      <div className="subseccion_titulo">5.1. Medidas prevención.</div>
      
      <br></br>
      Desde siempre hemos velado por la seguridad y la comodidad de nuestros empleados. Sin embargo, debido a la situación en la que nos encontramos, debemos dar un esfuerzo extra. Por ello te exponemos las adaptaciones y medidas que hemos establecido con el fin de prevenir contagios en el entorno laboral:
      <span className="tabulador">
      <br></br>  <span className="negrita">1. Uso obligatorio de mascarilla</span> en todos los espacios comunes y siempre que no se pueda respetar la distancia de seguridad de 2 metros.

      <br></br> <span className="negrita">2. Desinfección obligatoria de manos a la entrada y salida del espacio de trabajo.</span> En la recepción y en cada planta habrá dispensadores de gel hidroalcohólico a disposición de todo el personal.

      <br></br><span className="negrita"> 3. No superar el aforo máximo permitido de las zonas comunes.</span>
      </span>
      <br></br>Además de estas medidas, nos comprometemos a poner a tu disposición todas las facilidades posibles en el caso de que necesites llevar a cabo tu trabajo desde casa, ya sea debido a problemas de conciliación familiar, que tengas patologías previas o necesidades psicológicas. 
      <br></br><br></br><span className="negrita">Te ofrecemos la opción de teletrabajo.</span> Tendrás a tu disposición siempre las herramientas necesarias para realizar correctamente tus tareas de forma telemática, teniendo un servicio de soporte en el caso de incidencias.
      <br></br><br></br>


      
     
 
      </div>
      {
      window.onload=()=>{
        //Esta función la usamos para ir al elemento determinado
        function hazfocus(idhacia) {
          let hacia = document.getElementById(idhacia);
          hacia.scrollIntoView(); 
          
      }
      console.log("Manual elaborado para la asignatura ''Planificación y Gestión de Proyectos Informáticos'' por el grupo 18")
      //Mostrar los elementos del indice
      document.getElementById("logo").onclick=()=> document.getElementById("container").scrollTo(0,0);
      document.getElementById("botonIntro").onclick=()=> hazfocus("intro");
      document.getElementById("botonFilo").onclick=()=> hazfocus("filosofia");
      document.getElementById("botonprimerdia").onclick=()=> hazfocus("primerdia");
      document.getElementById("botoncomotrabajar").onclick=()=> hazfocus("comotrabajar");
      document.getElementById("botoncovid").onclick=()=> hazfocus("covid");
      
      var menuold;
      var seemenu=false;
      var uno =false;
      //Si el menú esta desplegado lo esconde
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
      
      
      //despliega el menú en el movil
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
