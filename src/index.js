// const {navbar}=window.Navbar
import pageNav from './navbar';
import page from './page';
import './all.min';


// create dropdown menu
const drop = pageNav('GBA', 'About', 'Work', 'Contact');// add elements to page
const navbar = drop.navbar();
const navMenu = drop.navMenu();
document.body.appendChild(page().overlay);
document.body.querySelector('.overlay').style.display = 'none';
const header = document.createElement('header');
header.appendChild(navMenu); 
header.appendChild(navbar);
document.body.appendChild(header);
document.body.appendChild(page().hero);
document.body.appendChild(page().container);
//  document.body.appendChild(main);