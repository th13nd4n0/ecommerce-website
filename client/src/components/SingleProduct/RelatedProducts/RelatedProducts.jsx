import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";
import "./RelatedProducts.scss";

import { Context } from "../../../utils/context";
import { fetchDataFromApi } from "../../../utils/api";
import { useContext, useEffect, useState } from "react";


const RelatedProducts = ({ categoryId, productId }) => {
    const { data } = useFetch(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
    );

    useEffect(() => {
        getVisited();
        getRecProd3();
        getRecProd2();
        getRecProd();
    }, []);
    const {recProd, setRecProd, recProd2, setRecProd2, recProd3, setRecProd3} = useContext(Context);
    const {visited, setVisited} = useContext(Context);
    const getRecProd3 = () => {setRecProd3(recProd2)};
    const getRecProd2 = () => {setRecProd2(recProd)};
    
    const getRecProd = () => {
        fetchDataFromApi(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`).then((res) => {
            setRecProd(res); 
        });
    };

    const getVisited = () => {
        setVisited(true);
    };

    return (
        <div className="related-products">
            <Products headingText="Related Products" products={data}/>
        </div>
    );
};

export default RelatedProducts;