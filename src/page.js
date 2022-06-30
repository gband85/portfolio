import "./page.css";

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
    <h1 class="">Garrett Anderson</h1>
    <h2 class="">Developer</h2>
  </div>`;
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = `
  <div class="projects my-5" id="projects-section">
    <div>
    <h1 class="my-5 text-center">Work</h1>
    </div>
  <div class="project-cards">     
        <div class="card h-100">
          <img src="img/tribute.png" class="card-img">
          <a href="projects/tribute">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Tribute Page</h5>
            </div>
          </a>
        </div>
              <div class="card h-100">
          <img src="img/survey.png" class="card-img">
          <a href="projects/survey">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Survey</h5>
            </div>
          </a>
        </div>      
        <div class="card h-100">
          <img src="img/product.png" class="card-img">
          <a href="/projects/product">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Product Page</h5>
            </div>
          </a>
        </div>      
        <div class="card h-100">
          <img src="img/doc.png" class="card-img">
          <a href="/projects/doc">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Documentation Viewer</h5>
            </div>
          </a>
        </div>
        <div class="card h-100">
          <img src="img/quotes.png" class="card-img">
          <a href="/projects/quotes">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Random Quote Machine</h5>
            </div>
          </a>
        </div>
        <div class="card h-100">
          <img src="img/markdown.png" class="card-img">
          <a href="/projects/markdown">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Markdown Previewer</h5>
            </div>
          </a>
        </div>
        <div class="card h-100">
          <img src="img/drum-machine.png" class="card-img">
          <a href="/projects/drummachine">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Drum Machine</h5>
            </div>
          </a>
        </div>
        <div class="card h-100">
          <img src="img/calculator.png" class="card-img">
          <a href="/projects/calculator-js">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Calculator</h5>
            </div>
          </a>
        </div>
      </div>
        <div class="card h-100">
          <img src="img/clock.png" class="card-img">
          <a href="/projects/clock-js">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Pomodoro Clock</h5>
            </div>
          </a>
        </div>
        <div class="card h-100">
          <img src="img/weather.png" class="card-img">
          <a href="/projects/weather">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Local Weather</h5>
            </div>
          </a>
        </div>
        <div class="card h-100">
          <img src="img/wikipedia.png" class="card-img">
          <a href="/projects/wikipedia/">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Wikipedia Search</h5>
            </div>
          </a>
        </div>
        <div class="card h-100">
          <img src="img/landing_page.png" class="card-img">
          <a href="/projects/landing_page/">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Landing Page</h5>
            </div>
          </a>
        </div>
        <div class="card h-100">
          <img src="img/restaurant.png" class="card-img">
          <a href="/projects/restaurant/">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Restaurant Site</h5>
            </div>
          </a>
        </div>
        <div class="card h-100">
          <img src="img/sign_up_form.jpg" class="card-img">
          <a href="/projects/sign_up_form/">
            <div class="card-img-overlay bg-dark text-white d-flex align-items-center justify-content-center">
              <h5 class="card-title">Sign-up Form</h5>
            </div>
          </a>
        </div>
      </div>
  </div>
</div>
  `;
  return { hero, container };
};
export { page };
