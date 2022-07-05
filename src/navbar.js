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
      const navLink=document.createElement('a')
      navLink.className="nav-link"
      navLink.textContent= item;
      navLink.addEventListener('click',function(){
        navList.classList.toggle('show');
      })
      listItem.appendChild(navLink);
      navList.appendChild(listItem);
    });
    console.log(navList.firstChild)
    navList.firstChild.firstChild.href="index.html"
    navList.firstChild.nextSibling.firstChild.href="index.html#projects-section"
    navbarUI.appendChild(navbarBrand);
    navbarUI.appendChild(navList);
    navbarUI.appendChild(menu);
    if (window.innerWidth >= 769) {
      menu.style.display = 'none';
      // navList.classList.remove('show');
      
          } else {
      menu.style.display = 'inline-block';
      // navList.classList.add('show');
          }
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 769) {
        menu.style.display = 'none';
        // navList.classList.remove('show');
                       } else {
        menu.style.display = 'inline-block';
        //unset transition, show menu,set transition
        navList.style.transition = 'none';
        setTimeout(function () {
          navList.style.transition = 'transform .8s ease-in-out';
        }, 100);
        // navList.classList.add('show');
                
      }
    });
    menu.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
   // document.body.appendChild(navbarUI);
    return navbarUI;
  };
  return { init };
};
export { navbar };
