import { Link } from "react-router-dom";
const Contact = () => {
    return ( <>
        <div id="contact" className="contact container" >
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <form className="row g-3 contact_form">
                        <h1>Đăng Ký <br/> với chúng tôi</h1>
                        <p>Bạn sẽ nhận được thông báo của chúng tôi về sản phầm mới nhất</p>
                        <div className="col-12">
                            <Link to={"/register"}> <button type="submit" className="btn btn-dark btn-md">Đăng ký</button></Link>
                        
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="contact_img col-lg-6 col-md-12">
    
                        <img className="" src="https://res.cloudinary.com/dxkokmfiu/image/upload/v1680444674/test/tnuig0cgoc0xc1nezkmo.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
 
export default Contact;