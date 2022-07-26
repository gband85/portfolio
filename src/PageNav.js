import './css/navbar.css';

const pageNav = (props) => {
  // accept any args
 // brandText, ...links
//   first arg is logo text,1 to end is buttons text
  const handleBtnClick=()=>{
      navMenu.classList.remove('show');
      document.body.querySelector('.overlay').style.display = 'none';
  }
  const linksArr = links.slice(0);
return (
  <header>
    <div className = 'nav__menu'>
    <ul className = 'nav__menu__list'>
            <li className = 'close__menu'>
            <button className='close__menu__btn' onClick={}><i class='fa-solid fa-x fa-2xl'></i></button>
    </li>
    {/*  iterate through args,create li with button with arg */}
    {
      linksArr.map((item) => {
      return (
        <li className = 'menu-item'>
      <a onClick={()=>{navMenu.classList.remove('show');
        document.body.querySelector('.overlay').style.display = 'none';}} className = 'nav-link'>{item}</a>

      </li>
      )
      }
    }
</ul>
    </div>



   <div className = 'navbar'>
    <h1 className = 'navbar__brand'></h1>
    <a href="index.html">${brandText}</a>;
      {/* create div */}
     <nav className = 'navbar__nav'>
      {/* //create navbuttons */}
<ul className = 'navbar__nav__list'>
   {/* //   iterate through args,create li with button with arg */}
   {  linksArr.map((item) => {
       <li className = 'menu-item'>
      <a className = 'nav-link' >{item}</a>
</li>
     })}
     {/* navbarNavList.firstChild.firstChild.href = 'index.html#hero';
     navbarNavList.firstChild.nextSibling.firstChild.href = 'index.html#projects-section';
     navbarNavList.firstChild.nextSibling.nextSibling.firstChild.href = 'index.html#contact-section'; */}
     {/* navbarNav.appendChild(navbarNavList); */}
</ul>
</nav>
     <button className = 'menu__btn'>;

<i className='fa-solid fa-bars fa-2xl'></i>
</button>
     {/* menuBtn.addEventListener('click', () => {
       document.body.querySelector('.nav__menu').classList.add('show');
       document.body.querySelector('.overlay').style.display = 'block';
     }); */}
 
     {/* return navbar; */}
</div>

    </header>
)
    }

    //  window.addEventListener('resize', () => {
    //    if (window.innerWidth >= 769) {
    //      navMenu.classList.remove('show');
    //      document.body.querySelector('.overlay').style.display = 'none';
    //    }
    //  });


  //  const navbar = () => {
  //    const navbar = document.createElement('div');
  //    navbar.className = 'navbar';
  //    const navbarBrand = document.createElement('h1');
  //    navbarBrand.className = 'navbar__brand';
  //     navButtons.className = 'nav-buttons';
  //    navbarBrand.innerHTML = `<a href="index.html">${brandText}</a>`;
  //     create div
  //    const navbarNav = document.createElement('nav');
  //    navbarNav.className = 'navbar__nav';
  //     create navbuttons
  //    const navbarNavList = document.createElement('ul');
  //    navbarNavList.className = 'navbar__nav__list';
  //     iterate through args,create li with button with arg
  //    linksArr.map((item) => {
  //      const listItem = document.createElement('li');
  //      listItem.className = 'menu-item';
  //      const navbarLink = document.createElement('a');
  //      navbarLink.className = 'nav-link';
  //      navbarLink.textContent = item;
  //      listItem.appendChild(navbarLink);
  //      navbarNavList.appendChild(listItem);
  //    });
  //    navbarNavList.firstChild.firstChild.href = 'index.html#hero';
  //    navbarNavList.firstChild.nextSibling.firstChild.href = 'index.html#projects-section';
  //    navbarNavList.firstChild.nextSibling.nextSibling.firstChild.href = 'index.html#contact-section';
  //    navbarNav.appendChild(navbarNavList);
  //     const menu=document.createElement("svg")
  //    const menuBtn = document.createElement(
  //      'button',
  //    );
  //    menuBtn.className = 'menu__btn';
  //     menu.appendChild();
  //    const menuIcon = document.createElement('i');
  //     console.log(icon);
  //    menuIcon.classList.add('fa-solid', 'fa-bars', 'fa-2xl');
  //    menuBtn.appendChild(menuIcon);

  //    navbar.appendChild(navbarBrand);
  //    navbar.appendChild(navbarNav);
  //    navbar.appendChild(menuBtn);
  //    menuBtn.addEventListener('click', () => {
  //      document.body.querySelector('.nav__menu').classList.add('show');
  //      document.body.querySelector('.overlay').style.display = 'block';
  //    });
  //     document.body.appendChild(navbarUI);
  //    return navbar;
  //  };
  //  return { navbar, navMenu };
//  };
export default pageNav;
