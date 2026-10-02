import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Subscribe to only the required part of the store
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div className="bg-[#fffaf0] min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-8">
        My Cart ({cart.length})
      </h1>

      {/* Clear Cart */}
      {cart.length > 0 && (
        <button
          onClick={handleClearCart}
          className="border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-6 hover:bg-red-500 hover:text-white"
        >
          Clear Cart
        </button>
      )}

      {/* Empty Cart */}
      {cart.length === 0 && (
        <p className="text-gray-500">
          Your cart is empty.
        </p>
      )}

      {/* Cart Items */}
      <div className="w-3/4">

        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 mb-5 flex items-center"
          >

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="ml-8 flex-1">

              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-500 mb-3">
                {item.description}
              </p>

              <p className="text-xl font-bold text-yellow-600">
                ₹{item.price}
              </p>

            </div>

            {/* Remove Specific Item */}
            <button
              onClick={() => dispatch(removeItem(index))}
              className="text-red-500 font-medium hover:text-red-700"
            >
              Remove
            </button>

          </div>
        ))}

      </div>

      {/* Order Summary */}
      {cart.length > 0 && (
        <div className="w-3/4 bg-white rounded-lg shadow-md p-6 mt-8">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-xl font-semibold text-gray-800">
              Order Summary
            </h2>

            <span className="text-gray-500">
              {cart.length} item{cart.length > 1 ? "s" : ""}
            </span>

          </div>

          <div className="border-t border-gray-200 pt-4 flex justify-between items-center">

            <span className="text-lg font-semibold text-gray-700">
              Total
            </span>

            <span className="text-2xl font-bold text-yellow-600">
              ₹{totalPrice}
            </span>

          </div>

          {/* Place Order */}
          <button
            className="w-full mt-6 bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700"
          >
            Place Order
          </button>

        </div>
      )}

    </div>
  );
};

export default Cart;
