import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'

import './css/navbar.css';

const navbar = (brandText, ...links) => {
  //accept any args
  //first arg is logo text,1 to end is buttons text
  let linksArr = links.slice(0);
  const init = () => {
    //create div
    const navbarUI = document.createElement('nav');
    navbarUI.className = 'navbar';
    //create navbuttons
  
    const navbarBrand = document.createElement('h1');
    navbarBrand.className="navbar__brand"
    // navButtons.className = 'nav-buttons';
    navbarBrand.innerHTML=`<a href="index.html">${brandText}</a>`;
    // const menu=document.createElement("svg")
    const menu = document.createElement(
      'button');
     menu.className='menu';
    // menu.appendChild();
    const menu__icon=document.createElement("i")
// console.log(icon);
menu__icon.classList.add("fa-solid","fa-bars","fa-2xl")
menu.appendChild(menu__icon);
    
    const navList = document.createElement('ul');
    navList.className = 'nav-list';
    //iterate through args,create li with button with arg
    linksArr.map(function (item) {
      const listItem = document.createElement('li');
      listItem.className = 'menu-item';
      listItem.innerHTML = `<a>${item}</a>`;
      navList.appendChild(listItem);
    });
    console.log(navList.firstChild)
    navList.firstChild.firstChild.href="index.html"
    navList.firstChild.nextSibling.firstChild.href="index.html#projects-section"
    navbarUI.appendChild(navbarBrand);
    navbarUI.appendChild(navList);
    navbarUI.appendChild(menu);
    if (window.innerWidth >= 600) {
      menu.style.display = 'none';
      navList.classList.add('desktop');
      navList.classList.remove('show');
      navbarUI.style.backgroundColor = 'black';
          } else {
      menu.style.display = 'inline';
      navList.classList.remove('desktop');
      navList.classList.add('show');
      navbarUI.style.backgroundColor = 'unset';
          }
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 600) {
        menu.style.display = 'none';
        navList.classList.remove('hide');
        navList.classList.add('desktop');
        //navList.style.display = "flex";
        navbarUI.style.backgroundColor = 'black';
              } else {
        menu.style.display = 'inline';
        //unset transition, hide menu,set transition
        navList.style.transition = 'unset';
        setTimeout(function () {
          navList.style.transition = 'all .5s ease-in-out';
        }, 100);
        navList.classList.add('hide');
        navList.classList.remove('desktop');
        navbarUI.style.backgroundColor = 'unset';
        
      }
    });
    menu.addEventListener('click', function () {
      navList.classList.toggle('hide');
    });
   // document.body.appendChild(navbarUI);
    return navbarUI;
  };
  return { init };
};
export { navbar };
