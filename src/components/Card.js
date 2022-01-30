import "./_Card.scss";
import "./_Modal.scss";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";


const Card = ({ title, type, price, img, isAvailable, onSale }) => {
    const [mostrarModal, setMostarModal] = useState(false)
    const handleMouseEnter = ()=>{
        setMostarModal(true)
    }
    const handleMouseLeave = ()=>{
        setMostarModal(false)
    }

    return (
        <div className={`card ${isAvailable === false && "not-available"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
             {mostrarModal && 
            <div className="modal">
                <p>Suscríbete al mail y recibe todas las ofertas!</p>
                <button>Suscribirme</button>
            </div>
            }    
            <div className="content-img">
                <img src={img}></img>
            </div>
            <h2 className="text">
                {title} {onSale === true && <span>On sale</span>}
            </h2>
            <p className="category">{type}</p>
            <div className="content-text">
            <p className="text">$ {price}</p>
            <div><BsCartPlus /></div>
            </div>
            

           
        </div>
    )
}

export default Card;