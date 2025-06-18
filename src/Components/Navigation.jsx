import DesignBags from "./DesignBags";
import image1 from '../assets/product-img/search.png';
import image2 from '../assets/product-img/profile.png';
import image3 from '../assets/product-img/save.png';
import image4 from '../assets/product-img/cart.png';

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white font-stretch-90%" href="#">T A N N T R I M</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  navbar" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-2 mb-lg-0 d-flex justify-content-center flex-grow-1">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Bags</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-white" href="#">Travels</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-white" href="#">Accesories</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-white" href="#">Gifting</a>
                            </li>
                            <li class="nav-item ">
                                <a className="nav-link text-white" href="#">Jewelery</a>
                            </li>
                        </ul>
                        <form class="d-flex justify-content-end align-items-center gap-2 nav-search" role="search">
                            <button className="btn text-white" type="submit"><img src={image1} alt="" /></button>
                            <button className="btn text-white" type="submit"><img src={image2} alt="" /></button>
                            <button className="btn text-white" type="submit"><img src={image3} alt="" /></button>
                            <button className="btn text-white" type="submit"><img src={image4} alt="" /></button>
                        </form>
                    </div>
                </div>
            </nav>
            <DesignBags />
        </>
    )
}
export default Navigation;