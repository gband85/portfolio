//const {navbar}=window.Navbar
 import { navbar } from "./navbar";
 import {page} from "./page";
//create dropdown menu
 const drop=navbar("GBA","Home","About","Work","Contact");//add elements to page
 const nav=drop.init();
 document.body.appendChild(nav);
 document.body.appendChild(page().hero);
 document.body.appendChild(page().container);