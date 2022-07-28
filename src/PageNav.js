import "./Navbar.css";
import Icon from '@mdi/react';
import { mdiClose, mdiMenu } from '@mdi/js';

const pageNav = (props) => {
  // accept any args
 // brandText, ...links
//   first arg is logo text,1 to end is buttons texts
  const handleBtnClick=()=>{
      // navMenu.classList.remove("show");
      // document.body.querySelector(".overlay").style.display = "none";
  }
  // const linksArr = props.links.slice(0);
return (
  <header>
    <div className = "nav__menu">
    <ul className = "nav__menu__list">
            <li className = "close__menu">
            <button className="close__menu__btn" onClick={()=>{
                  document.body.querySelector('.nav__menu').classList.remove('show');
    document.body.querySelector('.overlay').style.display = 'none';
            }}>      <Icon path={mdiClose}
        title="User Profile"
        size={1}
        horizontal
        vertical
        /></button>
    </li>

        <li className = "menu-item">
      <a className = "nav-link" href="index.html#hero">About</a>
      </li>
        
        <li className = "menu-item">
      <a className = "nav-link" href="index.html#projects-section">Work</a>
      </li>
        
        <li className = "menu-item">
      <a className = "nav-link" href="index.html#contact-section">Contact</a>
      </li>
      
</ul>
    </div>
   <div className = "navbar">
    <h1 className = "navbar__brand"><a href="index.html">GBA</a></h1>    
      {/* create div */}
     <nav className = "navbar__nav">
      {/* //create navbuttons */}
<ul className = "navbar__nav__list">
   {/* //   iterate through args,create li with button with arg */}
   <li className = "menu-item">
      <a className = "nav-link" href="index.html#hero">About</a>
      </li>

        <li className = "menu-item">
      <a className = "nav-link" href="index.html#projects-section">Work</a>
      </li>

        <li className = "menu-item">
      <a className = "nav-link" href="index.html#contact-section">Contact</a>
      </li>

</ul>
</nav>
     <button className = "menu__btn" onClick={()=>{
          document.body.querySelector('.nav__menu').classList.add('show');
    document.body.querySelector('.overlay').style.display = 'block';
     }}>

     <Icon path={mdiMenu}
        title="User Profile"
        size={1}
        horizontal
        vertical
        
        />
</button>

</div>

    </header>
)
    }

    //  window.addEventListener("resize", () => {
    //    if (window.innerWidth >= 769) {
    //      navMenu.classList.remove("show");
    //      document.body.querySelector(".overlay").style.display = "none";
    //    }
    //  });


  
export default pageNav;