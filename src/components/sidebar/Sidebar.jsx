import { AiOutlineShoppingCart } from "react-icons/ai";
import "./sidebar.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

const Sidebar = ({ handleChange }) => {
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <AiOutlineShoppingCart />
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Sidebar;
