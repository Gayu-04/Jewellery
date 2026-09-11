import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useProductInfo from "../utils/useProductInfo";

const Product = () => {
  const { id } = useParams();

  const prodInfo = useProductInfo(id);

  if (prodInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="product-details">
      <img
        src={prodInfo.image}
        alt={prodInfo.title}
      />

      <h1>{prodInfo.title}</h1>

      

      <p>{prodInfo.description}</p>
      <h3>Price: ₹{prodInfo.price}</h3>
    </div>
  );
};

export default Product;