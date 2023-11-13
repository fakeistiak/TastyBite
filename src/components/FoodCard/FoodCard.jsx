const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="mx-auto w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg shadow-orange-100">
      <img className="object-cover w-full h-56" src={image} alt="avatar"/>

      <div className="py-5 text-center px-6">
        <h3
          href="#"
          className="block text-xl font-bold text-black dark:text-black"
          role="link"
        >
          {name}
        </h3>
        <p className="text-sm text-black">{recipe}</p>
        <p className="text-lg text-white font-semibold">${price}</p>
        <button className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md shadow-orange-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
