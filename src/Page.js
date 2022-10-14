import { useState } from 'react';
import Card from './Card';
import './Page.css';

const Page=()=>{
  function importAll(images,projectArray) {
    const projects = [];
    
    images.keys().forEach((image,index) => {
      //images[item.replace('./', '')] = r(item);
      projects.push({title:projectArray[index].title,image: images(image),href:'/'+projectArray[index].href})
    });
//    for (let i=0;i<15;i++ ) {
// images[i].title=titles[i]
//    }
    return projects;
  }


  const projectArray=[   
    {title: "Calculator", href: "calculator-js"},
    {title: "Documentation Viewer", href: "doc"},
    {title: "Drum Machine", href: "drummachine"},
    {title: "Landing Page", href: "landing_page"},
    {title: "Markdown Previewer", href: "markdown"},
    {title: "Memory Game", href: "memory_game"},
    {title: "Pomodoro Clock", href: "pomodoro-clock"}, 
    {title: "Product Page", href: "product"},    
    {title: "Random Quote Machine", href: "quotes"},
    {title: "Restaurant Site", href: "restaurant"},
    {title: "Resume Builder", href: "resume_builder"},
    {title: "Rock Paper Scissors", href: "rockpaperscissors"},
    {title: "Shopping Cart", href: "shopping-cart"},
    {title: "Sign-up Form", href: "sign_up_form"},
    {title: "Survey", href: "survey"},
    {title: "Todo List", href: "todolist"},
    {title: "Tribute Page", href: "tribute"},
    {title: "Local Weather", href: "weather"},
    {title: "Wikipedia Search", href: "wikipedia"}    
    ];

  const [projects,setProjects]=useState(importAll(
    require.context('./images', false, /\.(png)$/),projectArray
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