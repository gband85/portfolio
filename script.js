let responsive = document.getElementById("responsive");
let frontend = document.getElementById("frontend");
let d3 = document.getElementById("d3");
let node = document.getElementById("node");
let nav_responsive=document.getElementById("nav-responsive")
let nav_frontend=document.getElementById("nav-frontend")
let nav_d3=document.getElementById("nav-d3")
let nav_node=document.getElementById("nav-node")
document.getElementById("nav-responsive").addEventListener("click", function() {
    
    nav_responsive.classList.add("active");
    nav_frontend.classList.remove("active");
    nav_d3.classList.remove("active");
    nav_node.classList.remove("active");
responsive.style.display="block";
frontend.style.display="none";
d3.style.display="none";
node.style.display="none";
//return false
})

document.getElementById("nav-frontend").addEventListener("click", function() {
    nav_responsive.classList.remove("active");
    nav_frontend.classList.add("active")
    nav_d3.classList.remove("active")
    nav_node.classList.remove("active")
    responsive.style.display="none";
    frontend.style.display="block";
    d3.style.display="none";
    node.style.display="none";
    })

    document.getElementById("nav-d3").addEventListener("click", function() {
        nav_responsive.classList.remove("active");
        nav_frontend.classList.remove("active")
        nav_d3.classList.add("active")
        nav_node.classList.remove("active")
        responsive.style.display="none"
        frontend.style.display="none";
        d3.style.display="block";
        node.style.display="none";
        })

        document.getElementById("nav-node").addEventListener("click", function() {
            nav_responsive.classList.remove("active");
            nav_frontend.classList.remove("active")
            nav_d3.classList.remove("active")
            nav_node.classList.add("active")
            responsive.style.display="none";
            frontend.style.display="none";
            d3.style.display="none";
            node.style.display="block";
            })
            window.onload=function() {
                nav_responsive.classList.add("active");
//                 responsive.style.display="block";
// frontend.style.display="none";
// d3.style.display="none";
// node.style.display="none";
            }

        let links =  document.querySelectorAll("nav-link");
            
         links.forEach(function(element){
             element.addEventListener("click",function() {
element.classList.add("active")
            })
         })   