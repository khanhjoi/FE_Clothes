import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

const Info = () => {
    const token = localStorage.getItem("token");
    const [view, setView] = useState(true);
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);
    let [price, setPrice] = useState(0);
    let stt = 0;

    useEffect(  () => {
        try {
           const fetchUser = async () => {
                const response = await axios.post('/user/info',{token: token});
                setUser(response.data);
                setCart(response.data.cart);
           };
           fetchUser();
        } catch (error) {
            console.log(error);
        };
    },[]);

    const handleClickView = (e) => {
        if(e.target.classList.contains(`1`)){
            setView(true);
        }
        if(e.target.classList.contains(`2`)){
            const totalPrice = user.cart.reduce((accumulator, item) => {
                return accumulator + item.item.price;
            }, 0);
            setPrice(totalPrice);
            stt = 0
            setView(false);
        }
    };
    const handleDelete = async (id) => {
        try {
            const response = await axios.post('/user/delete', {userId: user._id, productId: id});
            setCart(response.data);
            alert("Xóa thành công!");
        } catch (error) {
            console.log(error);
        }
    }

    const handlePayment = async () => {
        try {
            const response = await axios.post('/user/deleteAll', {userId: user._id});
            setCart(response.data);
            alert("Thanh Toán thành công!");
        } catch (error) {
            alert(error.response.data.msg);
        }
    }

    return (<>
        <Header/>
        <div className="container">
            <div className="row infoTable">
                <ul className="list-group list-group-flush col-3">
                    <p onClick={handleClickView} className="list-group-item list-group-item-action 1">Thông tin</p>
                    <p onClick={handleClickView} className="list-group-item list-group-item-action 2"> Giỏ hàng </p>
                </ul>
                <div className="col-9">
                    {
                        view ? <>
                            <div className="profile">
                            <h1 className="profile_title">Thông tin</h1>
                            <div className="profile_content">
                                <div className="name">
                                    Tên người dùng: 
                                    <p>{user.name}</p>
                                </div>
                                <div className="email">
                                    Email người dùng: 
                                    <p>{user.email}</p>
                                </div>
                            </div>
                        </div>
                        </>: <>
                          <h1>
                            Tổng giá tiền: {price} đ
                          </h1>
                            <button onClick={handlePayment} type="button" className="btn btn-dark pay" >Thanh toán</button>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Mã sản phẩm</th>
                                    <th scope="col">
                                        <p className="name_product">Tên sản phẩm</p>
                                    </th>
                                    <th scope="col">SL</th>
                                    <th scope="col">Gía tiền</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    user.cart.length <= 0 ? <>
                                        <tr v-if="this.cart.length === 0">
                                            <td colSpan="6" className="empty_cart">Võ hàng trống</td>
                                        </tr>
                                    </>: <>
                                        {cart.map(item => (
                                            <tr key={item.item._id} >
                                                <th className="index">{stt++}</th>
                                                <td className="id_product ">{item.item.product_id}</td>
                                                <td className="image_product"><img src={`${item.item.images}`}  alt=""/></td>
                                                <td className="name_product" >{item.item.title}</td>
                                                <td className="number_product">{item.number}</td>
                                                <td className="prices_product">{item.item.price}đ</td>
                                                <td className="edit_product">
                                                    <button onClick={() => handleDelete(item.item.product_id)} type="button" className="btn btn-dark">Xóa</button>
                                                </td>
                                            </tr> 
                                        ))}
                                    </>
                                    
                                }
                                </tbody>
                            </table>                     
                        </>
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </>);
}
 
export default Info;