// import logo from './logo.svg';
import './App.css';
import PageNav from './PageNav';
import Hero from './Hero';
import Page from './Page';

const App = () =>{
  return (
    <div>
    <div className = "overlay" onClick={()=>{
       document.body.querySelector('.overlay').style.display = 'none';
  document.body.querySelector('.nav__menu').classList.remove('show');
    }}>
</div>
    <PageNav links={"h"} brandText={"g"}/>
    <Hero/>
    <Page/>
    </div>
  );
}

export default App;
