let overlay=document.querySelectorAll(".card-img-overlay");

overlay.forEach(function(element) {
    element.addEventListener("mouseenter",function() {
        element.style.opacity=1;
    })
    element.addEventListener("mouseleave",function() {
        element.style.opacity=0;
    })
})

