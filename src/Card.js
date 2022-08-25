const Card=(props)=>{
    return (
    <div className="card">
    <a href={props.href}>
  <img src={props.image} className="card__img" alt=""/>
    
      <div className="card__overlay">
        <h3 className="card__title">{props.title}</h3>
      </div>
    </a>
  </div>
  )
}

export default Card;