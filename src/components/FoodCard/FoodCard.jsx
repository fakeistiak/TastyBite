import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';



const FoodCard = ({ item }) => {
  const { image, name, recipe, price ,_id} = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); 
  const axiosSecure = useAxiosSecure();
  const [,refetch]=useCart();
  
  const handleAddToCart = () => {
    if (user && user.email) {


      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post("/carts", cartItem)
      .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
           Swal.fire({
             position: "center",
             icon: "success",
             title: `${name} added to your cart successfully`,
             showConfirmButton: false,
             timer: 1500,
           });
          refetch();
        }
      });
    } 
    else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}})
        }
      });
    }
  }





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
        <button onClick={handleAddToCart} className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md shadow-orange-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
