import "./style.css";
import img from "./img.svg";
import arrow from "../../Header/img/footer/arrow-right.svg";
const CategoryBox = (props) => {
  return (
    <div className="categoryBox">
      <div className="categoryImg">
        <img src={props.img} alt="" />
      </div>
      <div className="categoryFlex">
        <div className="categoryTitle">{props.title}</div>
        <div className="categoryArrow">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
