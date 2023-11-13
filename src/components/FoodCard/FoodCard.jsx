const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="mx-auto w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img className="object-cover w-full h-56" src={image} alt="avatar" />

      <div className="py-5 text-center">
        <h3
          href="#"
          className="block text-xl font-bold text-gray-800 dark:text-white"
          role="link"
        >
          {name}
        </h3>
        <p className="text-sm text-white dark:text-gray-200">{recipe}</p>
        <p className="py-2 text-lg text-white font-semibold">${price}</p>
        <button className="btn bg-orange-500 hover:bg-orange-700 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
