
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
    <div className="bg-[#fffaf0] min-h-screen p-10">

      <div className="flex gap-10 bg-white p-8 shadow-lg rounded-lg">

        {/* Product Image */}
        <div>
          <img
            src={prodInfo.image}
            alt={prodInfo.title}
            className="w-96 h-96 object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="p-5">

          <h1 className="text-3xl font-bold mb-5">
            {prodInfo.title}
          </h1>

          <p className="text-gray-600 mb-5">
            {prodInfo.description}
          </p>

          <h3 className="text-2xl font-bold text-yellow-600 mb-5">
            Price: ₹{prodInfo.price}
          </h3>

          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default Product;
