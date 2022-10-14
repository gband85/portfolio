const Overlay=()=>{
    return (
        <div className = "overlay" onClick={()=>{
            document.body.querySelector('.overlay').style.display = 'none';
       document.body.querySelector('.nav__menu').classList.remove('show');
         }}>
     </div>
    )
}

export default Overlay;