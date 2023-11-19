import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => { 
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
           
              axiosSecure.delete(`/carts/${id}`)
                  .then(res => {
                      if (res.data.deletedCount > 0) {
                          refetch();
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success",
                        });
                      }
              })
          }
        });
    }


  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-3xl">Items:{cart.length}</h2>
        <h2 className="text-3xl">Total Price:{totalPrice}</h2>
        <button className="btn bg-orange-500 hover:bg-orange-700 text-white">
          Pay
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xl text-black bg-orange-500">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16 object-cover rounded-full">
                        <img
                          className="object-cover"
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-md text-whit">{item.name}</td>
                <td className="text-lg">${item.price}</td>
                <th>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-sm bg-red-500 hover:bg-rose-700 text-white text-2xl">
                    X{/* <MdDelete className="text-2xl"></MdDelete> */}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
