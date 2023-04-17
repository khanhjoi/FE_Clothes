import {useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Store =  () => {
    
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(`/api/products?page=${currentPage}&filter=${type}`);
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    };

    fetchItems();
  }, [currentPage, type]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilter = async (filter) => {
        setType(filter);
        setCurrentPage(1);
  }
    return (<>
      <div id="store" className="trendy" >
       <h1 className="trendy_titles">
            QUẦN ÁO XU HƯỚNG
       </h1>
       <div className="trendy_container container">
            <div className="row">
            <div className="trendy_ctn_nav col-lg-2">
                    <h3>Thể loại quần áo</h3>
                    <ul className="list-group nav list-group-flush">
                        <li className="filter btn btn-secondary list-group-item dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Áo </li>
                        <ul className="dropdown-menu">
                            <li><a onClick={() => handleFilter("Áo Phông")} className="dropdown-item" >Áo Phông</a> </li>
                            <li><a onClick={() => handleFilter("Áo Sơ Mi")} className="dropdown-item" >Áo Sơ Mi</a> </li>
                            <li><a onClick={() => handleFilter("Áo Polo")} className="dropdown-item" >Áo Polo</a> </li>
                            <li><a onClick={() => handleFilter("Áo Veste")} className="dropdown-item" >Áo Veste</a> </li>
                            <li><a onClick={() => handleFilter("Áo Len")} className="dropdown-item" >Áo Len</a> </li>    
                        </ul>
                        <li className="filter btn btn-secondary list-group-item dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Quần </li>
                        <ul className="dropdown-menu">
                            <li><a onClick={() => handleFilter("Quần Jean")} className="dropdown-item" >Quần Jean</a> </li>
                            <li><a onClick={() => handleFilter("Quần Tây")} className="dropdown-item" >Quần Tây</a> </li>
                            <li><a onClick={() => handleFilter("Quần KaKi")} className="dropdown-item" >Quần KaKi</a> </li>
                            <li><a onClick={() => handleFilter("Quần Đùi")} className="dropdown-item" >Quần Đùi</a> </li>    
                        </ul>
                    </ul>
                </div>
                <div className="trendy_List container col-lg-10">
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
            </div>     
       </div>
    </div>
    </>);
}
 
export default Store;