import Input from "../../Input";
import "./price.css";
import { AiFillStar } from "react-icons/ai";
const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" id="" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value={50}
        title="$0-$50"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$50-$100"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="$100-$150"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={200}
        title="$Over 150"
        name="test2"
      />
    </div>
  );
};

export default Price;
