import "./productList.css"
import Product from "../product/Product";
import {products} from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Build & Deplot for a better understanding.</h1>
          <p className="pl-desc">
            Here is a list of some project in my github repo. For some, 
            it was just about learning something new.
            Click for checking my github repo...!
          </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    );
};

export default ProductList
