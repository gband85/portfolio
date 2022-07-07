import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'

import './css/navbar.css';

const pageNav = (brandText, ...links) => {
  //accept any args
  //first arg is logo text,1 to end is buttons text
  let linksArr = links.slice(0);
  const navMenu=() => {
    const navMenu=  document.createElement('div');
    navMenu.className='nav__menu';
    const navMenuList = document.createElement('ul');
    navMenuList.className = 'nav__menu__list';
    //iterate through args,create li with button with arg
    linksArr.map(function (item) {
      const listItem = document.createElement('li');
      listItem.className = 'menu-item';
      const navLink=document.createElement('a')
      navLink.className="nav-link"
      navLink.textContent= item;
      navLink.addEventListener('click',function(){
        navMenuList.classList.toggle('show');
        document.body.querySelector('.overlay').style.display="none";
      })
      listItem.appendChild(navLink);
      navMenuList.appendChild(listItem);
    });
    console.log(navMenuList.firstChild)
    navMenuList.firstChild.firstChild.href="index.html#navbar"
    navMenuList.firstChild.nextSibling.firstChild.href="index.html#projects-section"
    navMenuList.firstChild.nextSibling.nextSibling.firstChild.href="index.html#contact-section"
  navMenu.appendChild(navMenuList);
  return navMenu;
    }
  const navbar = () => {
    const navbar=document.createElement('div');
    navbar.className="navbar";
    const navbarBrand = document.createElement('h1');
    navbarBrand.className="navbar__brand"
    // navButtons.className = 'nav-buttons';
    navbarBrand.innerHTML=`<a href="index.html">${brandText}</a>`;
    //create div
    const navbarNav = document.createElement('nav');
    navbarNav.className = 'navbar__nav';
    //create navbuttons
    const navbarNavList = document.createElement('ul');
    navbarNavList.className = 'navbar__nav__list';
    //iterate through args,create li with button with arg
    linksArr.map(function (item) {
      const listItem = document.createElement('li');
      listItem.className = 'menu-item';
      const navLink=document.createElement('a')
      navLink.className="nav-link"
      navLink.textContent= item;
      navLink.addEventListener('click',function(){
        navList.classList.toggle('show');
        document.body.querySelector('.overlay').style.display="none";
      })
      listItem.appendChild(navLink);
      navbarNavList.appendChild(listItem);
    });
    console.log(navbarNavList.firstChild)
    navbarNavList.firstChild.firstChild.href="index.html#navbar"
    navbarNavList.firstChild.nextSibling.firstChild.href="index.html#projects-section"
    navbarNavList.firstChild.nextSibling.nextSibling.firstChild.href="index.html#contact-section"
 navbarNav.appendChild(navbarNavList);
    // const menu=document.createElement("svg")
    const menu__btn = document.createElement(
      'button');
     menu__btn.className='menu__btn';
    // menu.appendChild();
    const menu__icon=document.createElement("i")
// console.log(icon);
menu__icon.classList.add("fa-solid","fa-bars","fa-2xl")
menu__btn.appendChild(menu__icon);
    

    navbar.appendChild(navbarBrand);
    navbar.appendChild(navbarNav);
    navbar.appendChild(menu__btn);
   menu__btn.addEventListener('click', function () {
    document.body.querySelector('.nav__menu').classList.toggle('show');
      document.body.querySelector('.overlay').style.display="block"
    });
   // document.body.appendChild(navbarUI);
    return navbar;
  };
  return { navbar,navMenu };
};
export { pageNav };
