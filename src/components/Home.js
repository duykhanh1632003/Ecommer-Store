import { useGetAllProductsQuery } from "../features/productApi";
import { HashLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const auth = useSelector((state) =>state.auth)
    const { data, error, isLoading } = useGetAllProductsQuery()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        navigate("/cart")
    }
    return (
        <div className="home-container">
            {isLoading ? <div className="hashloader-spinders">
                <HashLoader
                    color="#d74c37"
                    size={76}
                />
            </div> : error ? <p>một lỗi không xác định...</p> :
                <>
                    <h2>Sản phẩm mơi</h2>
                    <div className="products">
                        {data?.map(product => <div key={product.id} className="product">
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={ product.name} />
                            <div className="details">
                                <span>{product.desc}</span>
                                <span className="price">${product.price }</span>
                            </div>
                            <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
                        </div>)}
                    </div>
                </>
    }
    </div>);
}
 
export default Home;