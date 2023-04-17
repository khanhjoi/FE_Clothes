import {useState , useEffect} from 'react';
import axios from 'axios';
import { Link, useSearchParams} from "react-router-dom";
import Header  from '../Header';
import Footer from '../Footer';

const Sreach = () => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchItems = async () => {
            
            const response = await axios.get(`/api/products?page=${currentPage}&search=${searchParams.get('search')}`);
            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
        };

        fetchItems();
        
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return ( <>
        <Header/>
        <div className="trendy_List container col-lg-12 SearchPD">
                <div className="row"> 
                    {products.length <= 0 ? "loading please wait" :<>
                        {products.map(element => (
                            <Link to={`/products/${element.product_id}`} key={element.product_id} className="card col-4">
                                <img  className="card-img-top" src={element.images} alt="..."/>
                                    <div className="card-body">
                                    <h5 className="card-title">{`${element.title}`}</h5>
                                    </div>
                            </Link>
                         ))}
                    </>
                       }
                    </div>
                </div>
                <div className="row">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <div className="page-link" key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                                {pageNumber}
                        </div>
                    ))}
                </ul>
            </nav>
       </div>   
       <Footer/>
    </>);
}
 
export default Sreach;