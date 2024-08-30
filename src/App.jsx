import { useState } from 'react';
import './stylesheets/style/style.css';
import { 
  SectionS1, 
  Grid, 
  Shade, 
  Left, 
  Right, 
  Stripe,
  BorderGlow,
  BorderGlow_l,
} from './lib';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faPython, faJsSquare, faReact, faSass, faAndroid } from '@fortawesome/free-brands-svg-icons';
const App=()=>{
  const TimelineIcon=({ icon })=>{
    return(<>
      <FontAwesomeIcon icon={icon} className="timelineIcon" />
    </>);
  }
  const TimelineSeperator=()=>{
    return(<><div className='timelineLine'></div></>);
  }
  return (<>
    <Helmet>
      <title>M1dnight's Portfolio</title>
      <link rel="icon" type="image/x-icon" href="/logo-square.png"></link>
      <meta name='description' content="M1dnight's Portfolio" />
    </Helmet>
    <BorderGlow_l />
    <header>
      <Shade style={{background:"#191919c0",backdropFilter:"blur(2.5vmin)"}} />
      <BorderGlow_l />
      <Grid />
      <div className='txtlogowrapper'>
        <h1 className='txtlogo'>M1DnighT</h1>
        <h1 className='txtlogoshadow'>M1DnighT</h1>
      </div>
    </header>
    <SectionS1 id="s1">
      <BorderGlow_l />
      <Left id="s1l">
        <h1>About Me</h1>
        <p>
          My name is Tyler Vaz. I work as a web developer with a strong knowledge 
          of the latest technologies and a passion for music. Since I started my 
          career at an age of 12 years old I have gained proficiency in various 
          tools such as React, Redux, Vite, Electron, Flask and PyQt5. Moreover 
          I have one year of experience using JavaScript and two years with Python. 
          Currently I am further developing my skills in Kotlin and Java while also 
          having some experience, with C++ and C#. Playing the drums and the tenor 
          saxophone fuels my creativity. Helps me approach problem solving, with both 
          analytical and innovative thinking methods continuously seeking to learn and 
          grow while also valuing collaboration and open discussions.  
        </p>
      </Left>
      <Right id="s1r">
        <Shade style={{background:"#191919d0",backdropFilter:"blur(2.5vmin)",opacity: ".75",}} />
        <Stripe customStripColor="#121212c0" />
        <FontAwesomeIcon icon={faUser} className='icon' />
      </Right>
    </SectionS1>
    {/* <hr /> */}
    <SectionS1 id="s2_cd" className="tpbg1">
      <Shade style={{
        background:"#191919a0",
        backdropFilter:"blur(1vmin) hue-rotate(20deg)",
        opacity: ".985",}} />
      <div className='codeRoadmapWrapper'>
        <h1>Code Timeline</h1>
        <div className='codeRoadmap'>
          <TimelineIcon icon={faHtml5} id="tabicon_html" /><TimelineSeperator />
          <TimelineIcon icon={faPython} id="tabicon_py" /><TimelineSeperator />
          <TimelineIcon icon={faJsSquare} id="tabicon_js" /><TimelineSeperator />
          <TimelineIcon icon={faReact} id="tabicon_react" /><TimelineSeperator />
          <TimelineIcon icon={faSass} id="tabicon_sass" /><TimelineSeperator />
          <TimelineIcon icon={faAndroid} id="tabicon_kotline" />
        </div>
      </div>
    </SectionS1>
  </>);
}
export default App;