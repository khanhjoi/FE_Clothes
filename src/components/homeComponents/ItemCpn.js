import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const Item = () => {
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState({});
    const [number, setNumber] = useState(0);
    const token = localStorage.getItem("token");

    let {id} = useParams();

    useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(res => {
                setProduct(res.data.product[0]);
            })
    },[id]);

    let handleNumberChange = (e) => {
        setNumber(e.target.value);
    };


    let addProduct = async () => {
        if(token) {
            try {
                const response = await axios.post('/user/info', { token: token});
                const userData = response.data;
                setUser(userData);
                const cartData = {
                    product: product,
                    quantity: number,
                    userId: userData._id
                };
                
                
                const res = await axios.post('/user/add', cartData);
                alert(res.data.msg)
            } catch (error) {
                if(error.response.status === 400) {
                    alert(error.response.data.msg);
                }
            }
        } else {
            alert('Bạn phải đăng nhập');
        }
    }

    return (<>
        <Header/>
                <div className="products container">
                <div className="row">
                {product.length <= 0 ? "is loading please wait" : <>
                    <div className="img_pro col-lg-8 col-12">
                        <span>
                            <img alt="" src={product.images}/>
                        </span>
                    </div>
                    <div className="content_pro col-lg-4 col-12">
                        <h1 className="titel_pro">{product.title}</h1>
                        <p>{product.description}</p>
                        <p> Giá: {product.price} đ</p>
                        <p> {product.content} </p>
                        <div className="container">
                            <div className="number_item row">
                                <h4 className="col">Số lượng: </h4>
                                <input onChange={handleNumberChange} className="col" type="number" v-model="this.number"/>
                            </div>
                        </div>
                        <div className="buy_item">
                            <button onClick={addProduct} type="button" className="btn btn-dark" >Mua hàng <i className="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                    </>}
                </div>
            </div>
        <Footer/>
        </>
    );
}
 
export default Item;