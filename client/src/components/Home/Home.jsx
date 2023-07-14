import { useEffect, useContext } from "react";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {

    const {categories, setCategories, products, setProducts} = useContext(Context);
    const {recProd, recProd2, recProd3} = useContext(Context);

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
        });
    };

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products 
                        headingText="Recommened Products"
                        products={recProd}
                    />
                    <Products innerPage={true} products={recProd2}/>
                    <Products innerPage={true} products={recProd3}/>
                </div>
            </div>
        </div>
    );
};

export default Home;