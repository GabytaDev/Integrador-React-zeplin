import "./_Card.scss";

const Card = ({title,type,price,img,isAvailable, onSale})=>{
    return (
        <div className={`card ${isAvailable === false && "not-available"}`}>
            <h2 className="text">
                {title} {onSale === true && <span>On sale</span>}</h2>
            <p className="text">{type}</p>
            <p className="text">{price}</p>
            <div className="content-img">
            <img src={img}></img>
            
            </div>
            
        </div>
    )
}

export default Card;