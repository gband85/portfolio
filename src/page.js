import './css/page.css';

function importAll(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('./images', false, /\.(png|jpe?g|svg)$/),
);
const page = () => {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.body.querySelector('.nav__menu').classList.remove('show');
  });
  const hero = document.createElement('div');
  hero.className = 'hero';
  hero.id = 'hero';
  hero.innerHTML = `<div class="hero__text">
    <h1 class="hero__title">Garrett Anderson</h1>
    <h2 class="hero__subtitle">Developer</h2>
  </div>`;
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
  <div class="" id="projects-section">
    <div class="projects-title">
    <h1 class="my-5 text-center">My Work</h1>
    </div>
  <div class="project-cards">     
        <div class="card">
          <a href="projects/tribute">
        <img src="${images['tribute.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Tribute Page</h3>
            </div>
          </a>
        </div>
              <div class="card">
          <a href="projects/survey">
              <img src="${images['survey.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Survey</h3>
            </div>
          </a>
        </div>      
        <div class="card">
          <a href="/projects/product">
        <img src="${images['product.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Product Page</h3>
            </div>
          </a>
        </div>      
        <div class="card">
          <a href="/projects/doc">
        <img src="${images['doc.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Documentation Viewer</h3>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/quotes">
        <img src="${images['quotes.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Random Quote Machine</h3>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/markdown">
        <img src="${images['markdown.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Markdown Previewer</h3>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/drummachine">
        <img src="${images['drum-machine.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Drum Machine</h3>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/calculator-js">
        <img src="${images['calculator.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Calculator</h3>
            </div>
          </a>
        </div>
              <div class="card">
          <a href="./projects/clock-js">
              <img src="${images['clock.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Pomodoro Clock</h3>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/weather">
        <img src="${images['weather.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Local Weather</h3>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/wikipedia/">
        <img src="${images['wikipedia.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Wikipedia Search</h3>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/landing_page/">
        <img src="${images['landing_page.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Landing Page</h3>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/restaurant/">
        <img src="${images['restaurant.png']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Restaurant Site</h3>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/sign_up_form/">
        <img src="${images['sign_up_form.jpg']}" class="card__img">
          
            <div class="card__overlay">
              <h3 class="card__title">Sign-up Form</h3>
            </div>
          </a>
        </div>
        <div class="card">
        <a href="/projects/cv-project/">
      <img src="${images['resume_builder.png']}" class="card__img">
        
          <div class="card__overlay">
            <h3 class="card__title">Resume Creator</h3>
          </div>
        </a>
      </div>
      <div class="card">
      <a href="/projects/memory_game/">
    <img src="${images['memory_game.png']}" class="card__img">
      
        <div class="card__overlay">
          <h3 class="card__title">Memory Game</h3>
        </div>
      </a>
    </div>
    <div class="card">
    <a href="/projects/todolist/">
  <img src="${images['todolist.png']}" class="card__img">
    
      <div class="card__overlay">
        <h3 class="card__title">ToDos App</h3>
      </div>
    </a>
  </div>
      </div>
  </div>
  <div class="contact-section" id="contact-section">
  <div class="contact-title">
<h1 class="">Contact Me</h1>
  </div>
<div class="contact">
<a href="mailto:mail@gbanderson.net" class="btn btn-primary"><span><i
class="fa-solid fa-envelope"></i></span>  Email Me!</a>
  <a href="https://github.com/gband85" class="btn btn-primary" target="_blank"><span><i
        class="fa-brands fa-github"></i></span>  Github</a>
  <a href="https://www.linkedin.com/in/garrettanderson85/" class="btn btn-primary"
    target="_blank"><span><i class="fa-brands fa-linkedin"></i></span> LinkedIn</a>
  <a href="https://www.freecodecamp.org/gband85" id="profile-link" class="btn btn-primary"
    target="_blank"><span><i class="fa-brands fa-free-code-camp"></i></span> FreeCodeCamp</a>
</div>
</div>
</div>
  `;
  return { hero, container, overlay };
};
export default page;
