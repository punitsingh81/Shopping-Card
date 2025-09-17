import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
 const Product = ({post}) => {

//     const count = useSelector((state) => state.counter.value );
//     const dispatch = useDispatch();
const {cart} = useSelector((state)=> state);
const dispatch = useDispatch();

const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart")
}

const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
}
return (
    <div className="flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 border-r-8 border-t-2 rounded-xl  hover:scale-110 transition duration-300 ease-in shadow-2xl ">
        <div >
            <p className="text-gray-700  text-left truncate w-40 mt-1  font-semibold text-lg tw">
                {post.title}
            </p>
        </div>
        <div>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                {post.description.split(" ").slice(0,10).join(" ") + "..."}
            </p>
        </div>
        <div className="h-[180px]">
            <img src = {post.image}  className="h-full w-full"/>
        </div>

        <div className="flex justify-between gap-12 items-center w-full mt-5">
            <div>
        <p className="text-green-600 font-semibold">
        ${post.price}
        </p>
        </div>
        <button>
            {
                cart.some((p)=> p.id === post.id) ? 
                (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>Remove Item </button>):
                (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addToCart}>Add to Cart</button>)
            }
        </button>
        </div>
    </div>
)
}

export default Product
