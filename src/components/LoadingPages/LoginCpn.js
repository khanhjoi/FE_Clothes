import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useEffect, useState } from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/user/login", {
                email: email,
                password: password
            });

            const token = response.data.accessToken;
            localStorage.setItem("token", token);
            window.location.replace("/");
        } catch (error) {
            setError("Invalid email or password");
        }
    }

    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (<>
    <Header/>
    <div className="login"> 
      <form onSubmit={handleSubmit}>
        <h2 className="login_titel">Đăng nhập</h2>
        <div className="row mb-3">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input value={email} onChange={handleEmailChange} name="email" type="email" className="form-control" id="inputEmail"/>
          </div>
          <span className="messages"></span>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Mật khẩu</label>
          <div className="col-sm-10">
            <input value={password} onChange={handlePasswordChange} name="password" type="password" className="form-control" id="inputPassword" />
          </div>
          <span className="messages"></span>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button  type="submit" className="login_btn btn btn-dark">Đăng nhập</button>
      </form>
    </div>
    <Footer/>
    </>);
}

export default Login;