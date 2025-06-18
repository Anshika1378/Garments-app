import image1 from '../assets/product-img/Frame 50.png';
import image2 from '../assets/product-img/Frame 461.png';
import image3 from '../assets/product-img/Frame 49.png';
import image4 from '../assets/product-img/Frame 13.png';
import image5 from '../assets/product-img/Frame 49a.png';
import image6 from '../assets/product-img/Frame 49b.png';
import image7 from '../assets/product-img/Frame 22.png';
import image8 from '../assets/product-img/Frame 20.png';
import image9 from '../assets/product-img/Frame 46.png';
import Products from './Products';

function DesignBags() {
    return (
        <>
            <div className="container-fluid mt-2 flex flex-wrap justify-content-center align-items-center design-bags">
                <div className="row product-row justify-content-center">
                    <div className="col   me-auto">
                        <img src={image2} alt="" height={80}
                        />
                        <p className="text-white"><span>All Bags</span></p>
                    </div>
                    <div className="col  me-auto">
                        <img src={image1}
                            alt="" height={80}
                        />
                        <p className="text-white"><span>Vanity Pouch</span></p>
                    </div>
                    <div className="col  me-auto">
                        <img src={image3} alt="" height={80} />
                        <p className="text-white"><span>Tote Bag</span></p>
                    </div>
                    <div className="col  me-auto ">
                        <img src={image4} alt="" height={80} />
                        <p className="text-white"><span>Duffle Bag</span></p>
                    </div>
                    <div className="col   me-auto">
                        <img src={image5} alt="" height={80} />
                        <p className="text-white"><span>Laptop Sleeve</span></p>
                    </div>
                    <div className="col   me-auto">
                        <img src={image6} alt="" height={80} />
                        <p className="text-white"><span>Messengers Bags</span></p>
                    </div>
                    <div className="col  me-auto " >
                        <img src={image7} alt="" height={80} />
                        <p className="text-white"><span>Slings Bags</span></p>
                    </div>
                    <div className="col  me-auto ">
                        <img src={image8} alt="" height={80} />
                        <p className="text-white"><span>Handbags</span></p>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default DesignBags;