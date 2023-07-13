import "./Product.scss";

import prod from "../../../assets/products/sneaker-prod1.jpg";

const Product = ({id, data}) => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt=""/>
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">${data.price}</span>
            </div>
        </div>
    );
};

export default Product;