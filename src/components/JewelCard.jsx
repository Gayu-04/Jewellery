
const JewelCard = (props) => {
  const { jewelData } = props;

  const { title, description, price, image } = jewelData;

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md">

      <img
        className="w-60 h-60 object-cover rounded-lg"
        src={image}
        alt={title}
      />

      <h2 className="text-xl font-bold mt-3">
        {title}
      </h2>

      <h3 className="text-gray-600 mt-2">
        {description}
      </h3>

      <h4 className="text-lg font-bold text-yellow-600 mt-2">
        ₹{price}
      </h4>

    </div>
  );
};

export default JewelCard;
