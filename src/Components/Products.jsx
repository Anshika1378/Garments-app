import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image1 from '../assets/product-img/Vector 4.png';
const Product = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        axios.get(` https://fakestoreapi.com/products`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error Fetching Products:", error);
            })
    }, []);
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center flex-wrap text-white">
                    <div className="flex-start">Bags.Clothes</div>
                    <div className="flex-end vector-icon">13 Products <img src={image1} alt="" /></div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {products.slice(0,12).map((products, index) => (
                        <div className="col-md-3 mb-4 " key={index}>
                            <div className="card h-100">
                                <img  height={240} src={products.image}  alt="product-image" />
                                <div className="card-body">
                                    <h5 className="card-title">{products.title}</h5>
                                    <p className="card-text">{products.price}</p>
                                </div>
                                <div className="card-footer">
                                    <Link to={`/product-details/${products.id}`}>
                                        <button className="btn btn-primary w-100">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Product;