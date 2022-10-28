import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) =>{
    return (
        
        <div className="card col-4 mx-5 my-5 align-self-center overflow-hidden" style={{width: 400, height:"auto"}} >
            <img src={img} className="card-img-top img-responsive" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">$ {price}</p>
            <Link to={`/item/${id}`}>
                <button type="button" className="btn btn-danger mt-5">Ver mas</button>
            </Link>
        </div>
    </div>  
    )
}

export default Item