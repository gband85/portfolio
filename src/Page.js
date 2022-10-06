import { useState } from 'react';
import Card from './Card';
import './Page.css';

const Page=()=>{
  function importAll(images,titles) {
    const projects = [];
    
    images.keys().forEach((image,index) => {
      //images[item.replace('./', '')] = r(item);
      projects.push({title:titles[index],image: images(image),href:'/projects/'+images(image).match(/(?<=\/)[a-z-_]*(?=\.)/)})
    });
//    for (let i=0;i<15;i++ ) {
// images[i].title=titles[i]
//    }
    return projects;
  }


    const titlesArray=[   
  "Calculator",
  "Pomodoro Clock",
  "Documentation Viewer",
  "Drum Machine",
  "Landing Page",
  "Markdown Previewer",
  "Product Page",    
  "Random Quote Machine",
  "Restaurant Site",
  "Resume Creator",
  "Shopping Cart",
  "Sign-up Form",
  "Survey",
  "Tribute Page",
  "Local Weather",
  "Wikipedia Search",    
  ];

  const [projects,setProjects]=useState(importAll(
    require.context('./images', false, /\.(png)$/),titlesArray
  ));

    return (
        <div className="container">
        <div className="" id="projects-section">
        <div className="projects-title">
        <h1 className="my-5 text-center">My Work</h1>
        </div>
      <div className="project-cards">    
      {projects.map(project=>{
        return <Card title={project.title} image={project.image} href={project.href}/>
      })}
              </div>
      </div>
      <div className="contact-section" id="contact-section">
      <div className="contact-title">
    <h1 className="">Contact Me</h1>
      </div>
    <div className="contact">
    <a href="mailto:mail@gbanderson.net" className="btn btn-primary"><span><i
    className="fa-solid fa-envelope"></i></span>  Email Me!</a>
      <a href="https://github.com/gband85" className="btn btn-primary" target="_blank" rel="noreferrer"><span><i
            className="fa-brands fa-github"></i></span>  Github</a>
      <a href="https://www.linkedin.com/in/garrettanderson85/" className="btn btn-primary"
        target="_blank" rel="noreferrer"><span><i className="fa-brands fa-linkedin"></i></span> LinkedIn</a>
      <a href="https://www.freecodecamp.org/gband85" id="profile-link" className="btn btn-primary"
        target="_blank" rel="noreferrer"><span><i className="fa-brands fa-free-code-camp"></i></span> FreeCodeCamp</a>
    </div>
    </div>
    </div> 
    
    )
}
export default Page;