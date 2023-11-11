
const MenuItem = ({item}) => {
    const { image, name, recipe, price } = item;
    return (
      <div className="flex space-x-2">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={image}
          alt=""
        />
        <div>
          <h3 className="uppercase">{name}---------</h3>
          <p>{recipe}</p>
        </div>
        <p className="text-amber-500">${price}</p>
      </div>
    );
};

export default MenuItem;