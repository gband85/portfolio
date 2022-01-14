let overlay=document.querySelectorAll(".card-img-overlay");

overlay.forEach(function(element) {
    element.addEventListener("mouseenter",function() {
element.classList.remove("fade-out");
        element.classList.add("fade-in");
        element.style.opacity=1;
    })
    element.addEventListener("mouseleave",function() {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
        element.style.opacity=0;
    })
})

