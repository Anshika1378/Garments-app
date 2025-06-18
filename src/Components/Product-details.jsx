
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetails() {
  const { id } = useParams();
  const userId = parseInt(id);

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${userId}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      });
  }, [userId]);

  if (isLoading) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-2 mt-5">
            <div className="spinner-border text-primary" role="status"></div>
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row px-2 g-5 ">
          <div className="col-lg-5 col-md-4 col-sm-12">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src={product.image}
                  alt="image"
                  className="productimg"
                
                />
              </div>
            </div>
          </div> 
          <div className="col-lg-6 col-md-8 col-sm-12 ">
            <h1 className="text-success">
              <b>{product.title}</b>
            </h1>
            <h6 className="text-white">{product.description}</h6>
            <h5 className="text-white">Price: ${product.price}</h5>
            <button className="btn btn-success me-2">Proceed to Pay</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
