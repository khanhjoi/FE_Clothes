
const Footer  = () => {
    return (<>
         <div className="footer container">
        <div className="row">
            <div className="brand col-12">
                <a href=""><img src="../../../public/img/Fashion_logo.svg.png" alt=""/></a>
                <div className="icon_footer">
                    <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className="footer_content col-lg-6 col-md-12">
                <p>sản phẩm được tham khảo từ nhiều nguồn</p>
                <p>Copyright © 2022 Thời Trang Nam Biluxury</p>
            </div>
            <div className="footer_bg"></div>
        </div>
        </div>
    </>);
}
 
export default Footer;