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
  Topography,
} from './lib';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faPython, faJsSquare as faJs, faReact, faSass, faAndroid } from '@fortawesome/free-brands-svg-icons';
const App=()=>{
  /* const TimelineIcon=({ icon })=>{
    return(<>
      <FontAwesomeIcon icon={icon} className="timelineIcon" />
    </>);
  }
  const TimelineSeperator=()=>{
    return(<><div className='timelineLine'></div></>);
  } */
  const Project=({ children, project, shade=<Shade style={{background:"#191919d5",backdropFilter:"blur(1.5vmin)",opacity: "1",}} /> })=>{
    return(<>
      <div className='project' id={`project_${project.id}`}>
        <h1>{project.title}</h1>
        {shade}
        <Grid />
        {children}
      </div>
    </>);
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
      <h1 className='txtlogo'>M1DnighT</h1>
      <h1 className='txtlogoshadow'>M1DnighT</h1>
      <div className='hwrapper'>
        <h1 className='h1'>Web Development | Robotics | Engineering</h1>
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
    <>
    {/* <SectionS1 id="s2_cd" className="tpbg1">
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
        <div id="cr_contentWrapper">
          
        </div>
      </div>
    </SectionS1> */}
    </>
    <SectionS1 id="s2">
      <Left id="s2l">
        <Shade style={{background:"#191919a0",backdropFilter:"blur(2.5vmin)",opacity: "1",}} />
        <Grid />
        <FontAwesomeIcon icon={faPython} className='icon' />
      </Left>
      <Right id="s2r">
        <h1>Experience in Python</h1>
        <p>
        Throughout my experience over time I have refined my skills in Python 
        programming focused on objects that now plays a role in how I approach 
        coding tasks daily. Working with libraries and frameworks like PyQt5 and 
        Flask has significantly enhanced my Python journey. PyQt5 has empowered 
        me to create graphical interfaces while Flask has been instrumental, in 
        developing sturdy and adaptable web applications. My previous projects 
        showcase my expertise in Python through a variety of applications like 
        desktop programs and online services. This hands on experience has sharpened 
        my abilities. Given me a deeper understanding of the versatility and 
        effectiveness of Python, across different fields. 
        </p>
      </Right>
    </SectionS1>
    <SectionS1 id="s3">
      <Left id="s3l">
        <h1>Experience in Javascript</h1>
        <p>
        Over time, I've refined my javascript skills and have come to love the language. 
        Initially I began with Flask apps where I used JavaScript to bring some very basic
        functionality to my websites. It was a good starting point for me, and helped my 
        understand the very basics of web development. I wanted to take my skills to the 
        next level, so I pursued React and Electron for desktop/web development. I worked 
        on many projects in react, including a todo app which helped me learn Electron and 
        React. I worked on many other projects, such as a bean-themed web-app that helped me 
        learn lots about React states, Redux, and Vite. I'm currently working on a React Native 
        and Kotlin app to run macro scripts on mobile, and a bean-themed Windows XP clone called 
        Beansite XP.
        </p>
      </Left>
      <Right id="s3r">
        <Shade style={{background:"#191919d0",backdropFilter:"blur(2.5vmin)",opacity: "1",}} />
        <Topography />
        <FontAwesomeIcon icon={faJs} className='icon' />
      </Right>
    </SectionS1>
    <div className='SectionS2'>
      <h1 className='Title'>My Projects</h1>
      <p className='Desc'>
        A Collection of My Coding Projects
      </p>
      <hr />
      <Project project={{
        title:"Beansite XP",
        id:"mbxp",
      }}>
        <p>
          A bean-themed Windows XP clone and the successor to Beansite 95. It's a fun 
          playground for nostalgia nerds with a recreation of Steam, Powershell, and 
          many features like a variety of settings, a complex and very customizable sdk, 
          and so much more. This project, although being my passion project, also taught me 
          a lot about ReactJS states, and using Redux for global states.
        </p>
        <div className='project_mockup' id="mbxp_mockup"></div>
        <a href="https://mbxp.vercel.app">
          <button className='Button01'>Check It Out</button></a>
      </Project>
      <Project project={{
        title:"Flux Macro",
        id:"fluxm",
      }}>
        <p>
          Flux macro is a Roblox Bee Swarm Simulator macro intended for mobile players who 
          previously could not macro due to all macros written in AutoHotkey or Python and 
          only intended for desktop. It's written suing React Native for the user interface 
          and Kotlin for functionality. Currently, development hasn't fully started, but the 
          basic ui has been started.
        </p>
        <div className='project_mockup' id="fluxm_mockup"></div>
        <a href="https://flux-macro.github.io/Flux-Macro/">
          <button className='Button01'>Check It Out</button></a>
      </Project>
      <Project project={{
        title:"Beansite 95",
        id:"mb95",
      }}>
        <p>
          The original bean playground. Beansite 95 is another bean-themed windows clone, but 
          it's of 95 instead of xp. It is the original, and what started the beansite line-up. 
          The reason it was depricated was because of it's codebase. It was written with an 
          in-browser babel trasnformer, meaning no npm access, so it was very clunky and became a 
          burden to code for in the end. It did teach me a lot about ReactJS though, and was one of
          my favroite projects despite its flaws.
        </p>
        <div className='project_mockup' id="mb95_mockup"></div>
        <a href="https://mb95.vercel.app">
          <button className='Button01'>Check It Out</button></a>
      </Project>
      <Project project={{
        title:"Egg.sh",
        id:"eggsh",
      }}>
        <p>
          Egg.sh (prnounced Eggshell) is a simple, table-based implementation of CSS to Roblox 
          to allow for easy styling. It was built using Rojo, and written entirely in lua. 
          It compresses all of Roblox's weird styling mechanics, such as border radius' being a 
          child instead of being built into frames. Eggshell makes it easier by allowing you to 
          simple type it like you would in CSS. 
        </p>
        <div className='project_mockup' id="eggsh_mockup"></div>
        <a href="https://m1dnight-ofcl.github.io/egg.sh/">
          <button className='Button01'>Check It Out</button></a>
      </Project>
      <Project project={{
        title:"Todura",
        id:"todura",
      }}>
        <p>
          A simple todo app written in React with Electron. This project taught me the 
          basics of ReactJS, like using states and making cool looking user interfaces. 
          The project hasn't been maintained for a while, but its what transitioned me from 
          Flask to Vite.
        </p>
        <div className='project_mockup' id="todura_mockup"></div>
        <a href="https://github.com/M1dnight-ofcl/Todura">
          <button className='Button01'>Check It Out</button></a>
      </Project>
    </div>
  </>);
}
export default App;