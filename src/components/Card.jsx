import { AiFillStar } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star && <AiFillStar className="rating-star"/>} 
            {star && <AiFillStar className="rating-star"/>} 
            {star && <AiFillStar className="rating-star"/>} 
            {star && <AiFillStar className="rating-star"/>} 
         
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>{newPrice}
            </div>
            <div className="bag">
              <IoBagAdd className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
