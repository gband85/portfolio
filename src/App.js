// import logo from './logo.svg';
import './App.css';
import PageNav from './PageNav';
import Hero from './Hero';
import Page from './Page';
import Overlay from "./Overlay";

const App = () =>{
  return (
    <div>
      <Overlay />
    <PageNav links={"h"} brandText={"g"}/>
    <Hero/>
    <Page/>
    </div>
  );
}

export default App;
