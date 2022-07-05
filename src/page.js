import "./css/page.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);



const page = () => {
  const hero = document.createElement("div");
  hero.className = "hero";
  hero.innerHTML = `<div class="hero__text">
    <h1 class="hero__title">Garrett Anderson</h1>
    <h2 class="hero__subtitle">Developer</h2>
  </div>`;
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = `
  <div class="" id="projects-section">
    <div class="projects-title">
    <h1 class="my-5 text-center">Work</h1>
    </div>
  <div class="project-cards">     
        <div class="card">
          <a href="projects/tribute">
        <img src="${images["tribute.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Tribute Page</h5>
            </div>
          </a>
        </div>
              <div class="card">
          <a href="projects/survey">
              <img src="${images["survey.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Survey</h5>
            </div>
          </a>
        </div>      
        <div class="card">
          <a href="/projects/product">
        <img src="${images["product.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Product Page</h5>
            </div>
          </a>
        </div>      
        <div class="card">
          <a href="/projects/doc">
        <img src="${images["doc.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Documentation Viewer</h5>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/quotes">
        <img src="${images["quotes.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Random Quote Machine</h5>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/markdown">
        <img src="${images["markdown.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Markdown Previewer</h5>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/drummachine">
        <img src="${images["drum-machine.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Drum Machine</h5>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/calculator-js">
        <img src="${images["calculator.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Calculator</h5>
            </div>
          </a>
        </div>
              <div class="card">
          <a href="./projects/clock-js">
              <img src="${images["clock.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Pomodoro Clock</h5>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/weather">
        <img src="${images["weather.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Local Weather</h5>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/wikipedia/">
        <img src="${images["wikipedia.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Wikipedia Search</h5>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/landing_page/">
        <img src="${images["landing_page.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Landing Page</h5>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/restaurant/">
        <img src="${images["restaurant.png"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Restaurant Site</h5>
            </div>
          </a>
        </div>
        <div class="card">
          <a href="/projects/sign_up_form/">
        <img src="${images["sign_up_form.jpg"]}" class="card__img">
          
            <div class="card__overlay">
              <h5 class="card-title">Sign-up Form</h5>
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

  <a href="https://github.com/gband85" class="btn btn-primary" target="_blank"><span><i
        class="fab fa-github"></i></span>Github</a>
  <a href="https://www.linkedin.com/in/garrettanderson85/" class="btn btn-primary"
    target="_blank"><span><i class="fab fa-linkedin"></i></span>LinkedIn</a>
  <a href="https://www.freecodecamp.org/gband85" id="profile-link" class="btn btn-primary"
    target="_blank"><span><i class="fab fa-free-code-camp"></i></span>FCC</a>
</div>
</div>
</div>
  `;
  return { hero, container };
};
export { page };
