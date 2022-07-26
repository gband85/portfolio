import "./css/navbar.css";

const pageNav = (props) => {
  // accept any args
 // brandText, ...links
//   first arg is logo text,1 to end is buttons texts
  const handleBtnClick=()=>{
      // navMenu.classList.remove("show");
      // document.body.querySelector(".overlay").style.display = "none";
  }
  const linksArr = props.links.slice(0);
return (
  <header>
    <div className = "nav__menu">
    <ul className = "nav__menu__list">
            <li className = "close__menu">
            <button className="close__menu__btn" onClick={d}><i class="fa-solid fa-x fa-2xl"></i></button>
    </li>
    {/*  iterate through args,create li with button with arg */}
    {/* {      linksArr.map((item) => {
      return (
        <li className = "menu-item">
      <a onClick={()=>{navMenu.classList.remove("show");
        document.body.querySelector(".overlay").style.display = "none";}} className = "nav-link">{item}</a>

      </li>
      )
      }
      } */}
</ul>
    </div>
   <div className = "navbar">
    <h1 className = "navbar__brand"></h1>
    <a href="index.html">${props.brandText}</a>;
      {/* create div */}
     <nav className = "navbar__nav">
      {/* //create navbuttons */}
<ul className = "navbar__nav__list">
   {/* //   iterate through args,create li with button with arg */}
   {  linksArr.map((item) => {
       <li className = "menu-item">
      <a className = "nav-link" >{item}</a>
</li>
     })}
     {/* navbarNavList.firstChild.firstChild.href = "index.html#hero";
     navbarNavList.firstChild.nextSibling.firstChild.href = "index.html#projects-section";
     navbarNavList.firstChild.nextSibling.nextSibling.firstChild.href = "index.html#contact-section"; */}
     {/* navbarNav.appendChild(navbarNavList); */}
</ul>
</nav>
     <button className = "menu__btn">;

<i className="fa-solid fa-bars fa-2xl"></i>
</button>
     {/* menuBtn.addEventListener("click", () => {
       document.body.querySelector(".nav__menu").classList.add("show");
       document.body.querySelector(".overlay").style.display = "block";
     }); */}
 
     {/* return navbar; */}
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
