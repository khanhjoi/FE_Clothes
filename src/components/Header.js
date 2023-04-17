import React, { useState, useEffect } from 'react';
import "../Index.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const token = localStorage.getItem("token");
  const [input, setInput] = useState('');
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const getCartData = async () => {
      try {
        const response = await axios.post('/user/info', { token: token});
        setCarts(response.data.cart);
       
      } catch (error) {
        console.log(error);
      }
    }

    if (token) {
      getCartData();
    }
  }, [token]);

  

  const logout = () => {
    localStorage.removeItem('token');
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if(input) {
      window.location.href = `http://localhost:3000/search?search=${input}`;
    }
  }
  
  const HandlePayment =(e) => {
    if(!token) {
      e.preventDefault();
      alert('Bạn phải đăng nhập mới thực hiện được chức năng này !')
    }
  }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand">
            <img className="navbar-brand" src="../Fashion_logo.svg.png" alt=""/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">Trang chủ</Link>
              </li>
              <li className="nav-item dropdown">
                <HashLink smooth to={"/#store"}   className="nav-link" >
                  Cửa hàng 
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to={"/#contact"}  className="nav-link">Liên Hệ</HashLink>
              </li>
            </ul>
            <form onSubmit={handleSearch} className="d-flex nav_form">
              <div>
                  <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <input value={input} onChange={(e) => setInput(e.target.value)} className="form-control me-2" type="search" placeholder="Tìm Kiếm" aria-label="Search" />
              <div className="btn_cart">
                  <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="cart">
                <h3 className="cart_title">Giỏ Hàng</h3>
                <hr/>
                <div className="list-group cart_list" >
                  
                  {carts.length === 0 ? <h1 className="cart_list_empty">Võ hàng trống</h1> :<>
                    {carts.map(element => (
                          <Link to={`/products/${element.item.product_id}`} key={element.item._id} href="#" className="container list-group-item list-group-item-action active" aria-current="true">
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{element.item.title}</h5>
                           </div>
                           <p className="mb-1">giá: {element.item.price} đ</p>
                           <p className="mb-1">Số lượng: {element.number}</p>
                         </Link>
                    ))}
                  </>}
                </div>
                <Link to={'/info'} onClick={HandlePayment} className="cart_title"><button type="button" className="btn btn-dark">Mua Hàng</button></Link>
              </div>
            </form>
            
            {!token ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link"><p className="nav-link login_btn">Đăng nhập</p></Link>
                </li>
                <li className="nav-item">
                  <Link to={'/register'} className="nav-link"><p className="nav-link register_btn">Đăng ký</p></Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 " v-if="this.$store.state.token">
              <li className="nav-item">
                <Link to={'/info'} className="nav-link" ><p className="nav-link info " href="#">Thông tin</p></Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} onClick={logout}  className="nav-link" ><p  className="nav-link logout_btn " href="#"><i className="fa-solid fa-right-from-bracket"></i></p></Link>
              </li>
            </ul>
            )}
          </div>
        </div>
      </nav>
    </>
    );
}
 
export default Header;