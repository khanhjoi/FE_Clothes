import { HashLink } from 'react-router-hash-link';

const Slide = () => {
    return (<>
        <div className="slide container">
            <div className="row">
                <div className="slide_title col-lg-6 col-md-12">
                    <h1>Make Change</h1>
                    <p>
                        THĂNG HẠNG PHONG CÁCH - NÂNG TẦM PHONG THÁI
                    </p>
                    <HashLink smooth to={"/#store"}>
                        <button type="button" className="btn btn-dark">Shop Now</button>
                    </HashLink>
                </div>
                <div className="slide_mg col-lg-6 col-md-12">
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="10000">
                            <img src="https://res.cloudinary.com/dxkokmfiu/image/upload/v1681639139/test/vkdld4rznfshebcgvqox.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src="https://res.cloudinary.com/dxkokmfiu/image/upload/v1681637563/test/nsjlkjt0fnfn9dkv4pem.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/dxkokmfiu/image/upload/v1681637625/test/yzg06a9ceicu6upgy9np.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.cloudinary.com/dxkokmfiu/image/upload/v1681637563/test/nsjlkjt0fnfn9dkv4pem.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
            </div>
            <div className="slide_bg"></div>
        </div>
    </>);
}
 
export default Slide;