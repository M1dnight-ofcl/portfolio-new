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
const App=()=>{
  return (<>
    <Helmet>
      <title>M1dnight's Portfolio</title>
      <link rel="icon" type="image/x-icon" href="/logo-square.png"></link>
      <meta name='description' content="M1dnight's Portfolio" />
    </Helmet>
    <BorderGlow_l />
    <header>
      <Shade style={{background:"#191919d0",backdropFilter:"blur(2.5vmin)"}} />
      <BorderGlow_l />
      <Grid />
      <h1 className='txtlogo'>M1DnighT</h1>
      <h1 className='txtlogoshadow'>M1DnighT</h1>
    </header>
    <SectionS1 id="s1">
      <BorderGlow_l />
      <Left id="s1l">
        <h1>About Me</h1>
      </Left>
      <Right id="s1r">
        <Shade style={{background:"#191919b0",backdropFilter:"blur(2.5vmin)",opacity: ".75",}} />
        <Stripe />
      </Right>
    </SectionS1>
  </>);
}
export default App;