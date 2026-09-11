const JewelCard = (props) => {
  const { jewelData } = props;

  const { title, description, price, image } = jewelData;

  return (
    <div className="jewel-card">
      <img
        className="nath-img"
        src={image}
        alt={title}
      />

      <h2>{title}</h2>
      <h3>{description}</h3>
      <h4>₹{price}</h4>
    </div>
  );
};

export default JewelCard;